import { useState, useEffect } from "react";

type MediaType = {
    isMobileScreen: boolean,
    isTabletScreen: boolean,
    isDesktopScreen: boolean
}

const useMedia = (): MediaType => {
    const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
    const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);
    const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(false);


    function getMediaSize() {
        if (window.matchMedia("(max-width: 575px)").matches) {
            setIsMobileScreen(true);
            setIsTabletScreen(false);
            setIsDesktopScreen(false);

            return
        } else if (window.matchMedia("(min-width: 576px)").matches && window.matchMedia("(max-width: 991px)").matches) {
            setIsMobileScreen(false);
            setIsTabletScreen(true);
            setIsDesktopScreen(false);

            return
        } else if (window.matchMedia("(min-width: 992px)").matches && window.matchMedia("(max-width: 1199px)").matches) {
            setIsMobileScreen(false);
            setIsTabletScreen(false);
            setIsDesktopScreen(true);

            return
        } else if (window.matchMedia("(min-width: 1200px)").matches) {
            setIsMobileScreen(false);
            setIsTabletScreen(false);
            setIsDesktopScreen(false);

            return
        }
    }

    useEffect(() => {
        getMediaSize();
        window.addEventListener('resize', getMediaSize);
        return () => {
            window.removeEventListener('resize', getMediaSize);
        }
    }, []);

    return { isMobileScreen, isTabletScreen, isDesktopScreen }
}

export default useMedia;