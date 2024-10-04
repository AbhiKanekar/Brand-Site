let pageOneAnimation = () => {
    let tl = gsap.timeline();

    tl.from(".section1 nav h1, nav h4 , nav button", {
        y: -30,
        opacity: 0,
        delay: 0.3,
        duration: 0.3,
        stagger: 0.15
    })

    tl.from(".textContainer h1", {
        x: -100,
        opacity: 0,
        duration: 0.6
    })

    tl.from(".textContainer h5", {
        x: -100,
        opacity: 0,
        duration: 0.6
    })

    tl.from(".textContainer button", {
        opacity: 0,
        duration: 0.4
    })

    tl.from(".imageContainer img", {
        opacity: 0,
        duration: 0.4,
        x: 300
    }, "-=0.9")

    tl.from(".section3 img", {
        opacity: 0,
        duration: 0.4,
        y: 30,
        stagger: 0.15
    })
}

let pageTwoAnimation = () => {

    let timeLine2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section4",
            scroller: "body",
            start: "top 40%"
        }
    })

    timeLine2.from(".section4 .textContent h1", {
        x: -200,
        opacity: 0,
        duration: 0.6
    })

    timeLine2.from(".textContent h5", {
        x: 200,
        opacity: 0,
        duration: 0.6
    }, "-=0.6")

    timeLine2.from(".gridContent .colBox1", {
        x: -300,
        opacity: 0,
        duration: 0.4,
        stagger: 0.15
    })

    timeLine2.from(".gridContent .colBox2", {
        x: 300,
        opacity: 0,
        duration: 0.4,
        stagger: 0.15
    }, "-=0.4")
}

let pageThreeAnimation = () => {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section5",
            scroller: "body",
            start: "top 40%"
        }
    })

    tl3.from(".section5 .container", {
        y: 300,
        opacity: 0,
        duration: 0.3
    })

    tl3.from(".text h1, .text h4, .text button", {
        opacity: 0,
        duration: 0.6,
        x: -50,
        delay: 0.3
    })

    tl3.from(".image img", {
        opacity: 0,
        duration: 0.4,
        x: 300
    }, "-=0.59")
}

let pageFourAnimation = () => {
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section6",
            scroller: "body",
            markers: true,
            start: "top 40%"
        }
    })

    tl4.from(".section6 .textContent h1", {
        x: -200,
        opacity: 0,
        duration: 0.6
    })

    tl4.from(".section6 .textContent h5", {
        x: 200,
        opacity: 0,
        duration: 0.6
    }, "-=0.6")
}

pageFourAnimation();
// pageThreeAnimation();
// pageTwoAnimation();
// pageOneAnimation();
