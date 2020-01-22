import useAnimationShow from './useAnimationShow';

export default (animations) => {
    if(!Array.isArray(animations)) {
        animations = [animations];
    }

    let showingAll = [];
    let styleAll = {};
    const showAll = [];
    const hideAll = [];

    animations.forEach(a => {
        const [value, show, hide, showing] = useAnimationShow(
            a.initialValue,
            a.finalValue,
            a.durationShow,
            a.durationHide,
        );
        
        showingAll = showingAll && showing;
        styleAll = {...styleAll, ...a.stylize(value)};

        showAll.push(show);
        hideAll.push(hide);
    });

    const show = () => {
        showAll.forEach(showFunc => {
            showFunc();
        });
    }

    const hide = () => {
        hideAll.forEach(hideFunc => {
            hideFunc();
        })
    };

    return [styleAll, show, hide, showingAll];
}