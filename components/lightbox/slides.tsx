const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];
import certificates from "@/components/album/certificates";

const slides = certificates.map((certImg) => ({
    src: certImg.src,
    width: 500,
    height: 350,
    srcSet: breakpoints.map((breakpoint) => ({
        src: certImg.src,
        width: breakpoint,
        height: Math.round((350 / 500) * breakpoint),
    })),
}));

export default slides;
