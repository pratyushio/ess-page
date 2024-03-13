'use client';
import classNames from "classnames";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useFeaturesStore } from "./store";

type Props = {
    children: React.ReactNode,
    id: string,
};

export default function FeatureTitle({children, id}: Props) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});
    const setInviewFeature = useFeaturesStore(state => state.setInViewFeature);
    const inViewFeature = useFeaturesStore((state) => state.inViewFeature);
    
    useEffect(() => {
        if (isInView) setInviewFeature(id);
        if (!isInView && inViewFeature == id) setInviewFeature(null);
    }, [isInView, id, setInviewFeature, inViewFeature]);

    return (
        <p ref={ref} className={classNames("py-16 max-sm:py-20 font-semibold lg:text-4xl sm:text-3xl transition-colors", isInView ? "text-black" : "text-gray-200")}>{children}</p>
    )
}
