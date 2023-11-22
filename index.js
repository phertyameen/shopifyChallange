function changeImageSource() {
    let imageElement = document.querySelector("#myImage");
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    //screen width less than or equal to 440px
    if (windowWidth <= 440) {
        imageElement.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
    } else {
        imageElement.src = "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
    }
}

// Call the function on page load
changeImageSource();

// Attach the function to the window resize event
window.addEventListener("resize", changeImageSource);

// setup drop icon
let dropUp = document.querySelector('#dropUp')
let dropDowm = document.querySelector('#dropDowm')
let dropDowmLists = document.querySelector('.dropDowmLists')


dropUp.addEventListener('click', () => {
    dropDowmLists.style.display = 'block'
    dropUp.style.display = 'none'
    dropDowm.style.display = 'block'
})
dropDowm.addEventListener('click', () => {
    dropDowmLists.style.display = 'none'
    dropDowm.style.display = 'none'
    dropUp.style.display = 'block'
})

// select plan button redirect
const selectPlanBtn = document.querySelector('#selectPlanBtn')

selectPlanBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = 'https://www.shopify.com/pricing';
})
// exit action
const exit = document.querySelector('.exit')

exit.addEventListener('click', () => {
    const mainNav = document.querySelector('.mainNav')
    const setUpGuideSec = document.querySelector('.setUpGuideSec')

    mainNav.style.display = 'none'
    setUpGuideSec.style.marginTop = '5rem'
})

// checkList items toggle
let checkLists = document.querySelectorAll('.checkList')

checkLists.forEach( checkList => {
    const infoCheckList = checkList.nextElementSibling;
    const parentElement = checkList.parentElement

    checkLists.forEach(otherCheckList => {
        const otherInfoCheckList = otherCheckList.nextElementSibling;
        if (otherInfoCheckList !== infoCheckList) {
            otherInfoCheckList.style.display = 'none';
        }
    });

    checkList.addEventListener('click', ()=>{
        if (infoCheckList.style.display === 'block') {
            infoCheckList.style.display = 'none';
            parentElement.style.backgroundColor = 'inherit'
        } else {
            infoCheckList.style.display = 'block';
            parentElement.style.backgroundColor = '#F3F3F3'
        }
    })
})


// let checkLists = document.querySelectorAll('.checkList');
// console.log(checkLists);

// let currentIndex = 0;

// checkLists.forEach((checkList, index) => {
//     const infoCheckList = checkList.nextElementSibling;
//     const parentElement = checkList.parentElement;

//     checkLists.forEach((otherCheckList, otherIndex) => {
//         const otherInfoCheckList = otherCheckList.nextElementSibling;
//         if (otherInfoCheckList !== infoCheckList) {
//             otherInfoCheckList.style.display = 'none';
//         }
//     });

//     checkList.addEventListener('click', () => {
//         toggleVisibility();
//     });

//     // Keyboard navigation
//     checkList.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             toggleVisibility();
//         } else if (event.key === 'ArrowUp' && index > 0) {
//             event.preventDefault();
//             currentIndex = index - 1;
//             focusItem();
//         } else if (event.key === 'ArrowDown' && index < checkLists.length - 1) {
//             event.preventDefault();
//             currentIndex = index + 1;
//             focusItem();
//         }
//     });
// });

// function toggleVisibility() {
//     const infoCheckList = checkLists[currentIndex].nextElementSibling;
//     const parentElement = checkLists[currentIndex].parentElement;

//     if (infoCheckList.style.display === 'block') {
//         infoCheckList.style.display = 'none';
//         parentElement.style.backgroundColor = 'inherit';
//     } else {
//         infoCheckList.style.display = 'block';
//         parentElement.style.backgroundColor = '#F3F3F3';
//     }
// }

// function focusItem() {
//     checkLists[currentIndex].focus();
// }


// display notification alert popup

const notificationSvg = document.querySelector('.notificationSvg')
const notificationAlert = document.querySelector('.notificationAlert')

notificationSvg.addEventListener('click', () => {
    if (notificationAlert.style.display === 'block') {
        notificationAlert.style.display = 'none';
    } else {
        notificationAlert.style.display = 'block';
    }
})

// display userCollectionChild dropdown menu

let userCollectionChild = document.querySelector('.userCollectionChild')

userCollectionChild.addEventListener('click', () => {
    let userCollectionDropdown = document.querySelector('.userCollectionDropdown')

    if (userCollectionDropdown.style.display === 'block') {
        userCollectionDropdown.style.display = 'none'
    } else {
        userCollectionDropdown.style.display = 'block'
    }
})

const parentSvgs = document.querySelectorAll('.parentSvgs');
console.log(parentSvgs)

parentSvgs.forEach((parentSvg) => {
    const clickableSvg = parentSvg.firstElementChild;

    const tickSvg = clickableSvg.nextElementSibling;
    const tickSvg2 = tickSvg.nextElementSibling;

    clickableSvg.addEventListener('click', function () {
        tickSvg2.style.display = 'block'
    });
});

