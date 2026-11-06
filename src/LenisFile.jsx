import Lenis from 'lenis';

const LenisFile = () => {
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return;
}

export default LenisFile