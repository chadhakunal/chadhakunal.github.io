import React, {
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    useEffect,
    useMemo,
    useRef,
    useImperativeHandle,
  } from "react";
  import gsap from "gsap";
  import "./CardSwap.css";
  
  export const Card = forwardRef(
    ({ customClass, ...rest }, ref) => (
      <div
        ref={ref}
        {...rest}
        className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
      />
    )
  );
  Card.displayName = "Card";
  
  const makeSlot = (
    i,
    distX,
    distY,
    total
  ) => ({
    x: i * distX,
    y: -i * distY,
    z: -i * distX * 1.5,
    zIndex: total - i,
  });
  const placeNow = (el, slot, skew) =>
    gsap.set(el, {
      x: slot.x,
      y: slot.y,
      z: slot.z,
      xPercent: -50,
      yPercent: -50,
      skewY: skew,
      transformOrigin: "center center",
      zIndex: slot.zIndex,
      force3D: true,
    });
  
  const CardSwap = forwardRef(({
    width = 500,
    height = 400,
    cardDistance = 60,
    verticalDistance = 70,
    pauseOnHover = false,
    onCardClick,
    skewAmount = 6,
    easing = "elastic",
    expanded = false,
    children,
  }, ref) => {
    const config =
      easing === "elastic"
        ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
        : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };
  
    const childArr = useMemo(
      () => Children.toArray(children),
      [children]
    );
    const refs = useMemo(
      () => childArr.map(() => React.createRef()),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [childArr.length]
    );
  
    const order = useRef(
      Array.from({ length: childArr.length }, (_, i) => i)
    );
  
    const tlRef = useRef(null);
    const container = useRef(null);

    // Forward swap (next)
    const swapForward = () => {
      if (order.current.length < 2) return;
      if (tlRef.current?.isActive()) return;
      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;
  
      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });
  
      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });
  
      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );
  
      tl.call(() => {
        order.current = [...rest, front];
      });
    };
  
    // Backward swap (prev)
    const swapBackward = () => {
      if (order.current.length < 2) return;
      if (tlRef.current?.isActive()) return;
      const last = order.current[order.current.length - 1];
      const rest = order.current.slice(0, -1);
      const elBack = refs[last].current;
      const tl = gsap.timeline();
      tlRef.current = tl;
  
      // 1. Animate the last card down from the back of the stack
      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.set(elBack, { x: backSlot.x, y: backSlot.y, z: backSlot.z, zIndex: 0 });
      tl.to(elBack, {
        y: "+=200",
        z: backSlot.z - 100,
        duration: config.durDrop * 0.5,
        ease: config.ease,
      });
  
      // 2. Instantly move it to the front position (in front of the stack)
      const frontSlot = makeSlot(0, cardDistance, verticalDistance, refs.length);
      tl.set(elBack, { x: frontSlot.x, y: frontSlot.y - 200, z: frontSlot.z, zIndex: refs.length + 1 });
  
      // 3. Animate it up into place as the new top card
      tl.to(elBack, {
        y: frontSlot.y,
        duration: config.durDrop * 0.5,
        ease: config.ease,
      });
  
      // Move the rest of the cards back one position
      [last, ...rest].forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex });
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `-=${config.durDrop * 0.5}` // Overlap with the last card's up animation
        );
      });
  
      tl.call(() => {
        order.current = [last, ...rest];
      });
    };
  
    useImperativeHandle(ref, () => ({
      swapForward,
      swapBackward,
    }));
  
    useEffect(() => {
      const total = refs.length;
      refs.forEach((r, i) =>
        placeNow(
          r.current,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount
        )
      );
      // Initial swap to set up the stack visually
      // (Optional: comment out if you want the original order)
      // swapForward();
    }, [cardDistance, verticalDistance, skewAmount, easing, refs]);
  
    // Animate to expanded or collapsed layout
    useEffect(() => {
      if (!refs.length) return;
      if (expanded) {
        // Lay out cards in a grid (4 columns)
        const columns = 4;
        const gapX = width * 0.7;
        const gapY = height * 0.7;
        refs.forEach((r, i) => {
          const col = i % columns;
          const row = Math.floor(i / columns);
          gsap.to(r.current, {
            x: (col - (columns - 1) / 2) * gapX,
            y: (row - (Math.ceil(refs.length / columns) - 1) / 2) * gapY,
            z: 0,
            skewY: 0,
            xPercent: -50,
            yPercent: -50,
            zIndex: 1,
            duration: 0.7,
            ease: 'power2.inOut',
          });
        });
      } else {
        // Restore stack layout
        refs.forEach((r, i) => {
          const idx = order.current[i];
          const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
          gsap.to(r.current, {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            skewY: skewAmount,
            xPercent: -50,
            yPercent: -50,
            zIndex: slot.zIndex,
            duration: 0.7,
            ease: 'power2.inOut',
          });
        });
      }
    }, [expanded, refs, width, height, cardDistance, verticalDistance, skewAmount]);
  
    const rendered = childArr.map((child, i) =>
      isValidElement(child)
        ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          },
        }) : child
    );
  
    return (
      <div
        ref={container}
        className="card-swap-container"
        style={{ width, height }}
      >
        {rendered}
      </div>
    );
  });
  
  export default CardSwap;
  