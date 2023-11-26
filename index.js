function changeImageSource() {
  let imageElement = document.querySelector("#myImage");
  let windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  //screen width less than or equal to 440px
  if (windowWidth <= 440) {
    imageElement.src =
      "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
  } else {
    imageElement.src =
      "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
  }
}

changeImageSource();

window.addEventListener("resize", changeImageSource);

// display notification alert popup

const notificationSvg = document.querySelector(".notificationSvg");
const notificationAlert = document.querySelector(".notificationAlert");

function alertPopUp() {
  notificationAlert.style.display = "block";

  notificationAlert.addEventListener("KeyUp", handleMenuEscapeKeypress);
}

function closeAlertPopUp() {
  notificationAlert.style.display = "none";

  notificationSvg.blur();
}

notificationSvg.addEventListener("click", () => {
  if (notificationAlert.style.display === "block") {
    closeAlertPopUp();
  } else {
    alertPopUp();
  }
});

// --------------------------------------------------------------------------------------------------------------
// display userCollectionChild dropdown menu

let userCollectionChild = document.querySelector(".userCollectionChild");

// focus the first menuItem in userCollectionChild dropdown menu

function toggleMenu() {
  let userCollectionDropdown = document.querySelector(
    ".userCollectionDropdown"
  );

  function closeMenu() {
    userCollectionDropdown.style.display = "none";
    userCollectionDropdown.ariaExpanded = "false";

    userCollectionChild.setAttribute('tabindex', '0');
    userCollectionChild.focus()
  }

  function handleMenuEscapeKeypress(e) {
    if (e.key === "Escape") {
      closeMenu();
      closeAlertPopUp();
    }
  }

  function handleAllMenuArrowKeypress(e, menuItemIndex) {
    console.log(e);
    // getting first element
    const fistMenuItem = menuItemIndex === 0;

    // getting last element
    const lastMenuItem = menuItemIndex === allMenuItems.length - 1;

    // getting next menu item
    const nextMenuItem = allMenuItems.item(menuItemIndex + 1);

    // getting previous menu item
    const previousMenuItem = allMenuItems.item(menuItemIndex - 1);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (lastMenuItem) {
        allMenuItems.item(0).focus();

        return;
      }
      nextMenuItem.focus();
    }

    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (fistMenuItem) {
        allMenuItems.item(allMenuItems.length - 1).focus();

        return;
      }
      previousMenuItem.focus();
    }
  }

  function openMenu() {
    userCollectionDropdown.style.display = "block";
    userCollectionDropdown.ariaExpanded = "true";

    userCollectionChild.blur();
    allMenuItems.item(0).focus();

    // function to handle escape event

    userCollectionDropdown.addEventListener("keyup", handleMenuEscapeKeypress);
  }

  const allMenuItems =
    userCollectionDropdown.querySelectorAll('[role="menuitem"]');
  console.log(allMenuItems);

  allMenuItems.forEach(function (menuItem, menuItemIndex) {
    menuItem.addEventListener("keyup", (e) => {
      handleAllMenuArrowKeypress(e, menuItemIndex);
    });
  });

  if (userCollectionDropdown.style.display === "block") {
    closeMenu();
  } else {
    openMenu();
  }
}
userCollectionChild.addEventListener("click", toggleMenu);
// ------------------------------------------------------------------------------------------------------------------------

// 'select plan' button redirect
const selectPlanBtn = document.querySelector("#selectPlanBtn");

selectPlanBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "https://www.shopify.com/pricing";
});
// exit action
const exit = document.querySelector(".exit");

exit.addEventListener("click", () => {
  const mainNav = document.querySelector(".mainNav");
  const setUpGuideSec = document.querySelector(".setUpGuideSec");

  mainNav.style.display = "none";
  setUpGuideSec.style.marginTop = "5rem";
});

// setup drop icon in main
let dropUp = document.querySelector("#dropUp");
let dropDowm = document.querySelector("#dropDowm");
let dropDowmLists = document.querySelector(".dropDowmLists");

dropUp.addEventListener("click", () => {
  // checkList items toggle
  // ------------------------------------------------------------------------------------------------------------

  const parentSvgs = document.querySelectorAll(".parentSvgs"); // ---------------------------------
  const progressCount = document.getElementById("progressCount");
  const progressBar = document.getElementById("progress");

  const checkBoxStatus = document.querySelector('#checkBoxStatus')
  console.log(checkBoxStatus)

  parentSvgs.forEach((parentSvg) => {
    const clickableSvg = parentSvg.firstElementChild;

    const borderTickSvg = clickableSvg.nextElementSibling;
    const tickSvg = borderTickSvg.nextElementSibling;

    function incrementProgress() {
      // Increase progress by 20
      progressBar.value += 20;

      // Update progress count
      const currentCount = parseInt(progressCount.innerText, 10);
      const newCount = currentCount + 1;
      progressCount.innerText = newCount;

      borderTickSvg.style.display = "block";
      clickableSvg.style.display = "none";
      tickSvg.style.display = "none";

      checkBoxStatus.ariaLabel = 'loading, please wait...'
      setTimeout(() => {
        tickSvg.style.display = "block";
        borderTickSvg.style.display = "none";

        clickableSvg.ariaLabel = clickableSvg.replace('checked', 'unchecked')
      }, 2500)

      checkBoxStatus.ariaLabel = 'loading complete, todo is successfully unchecked'
    }
    function decrementProgress() {
      // Increase progress by 20
      progressBar.value -= 20;

      // Update progress count
      const currentCount = parseInt(progressCount.innerText, 10);
      const newCount = currentCount - 1;
      progressCount.innerText = newCount;

      borderTickSvg.style.display = "block";
      clickableSvg.style.display = "none";
      tickSvg.style.display = "none";

      checkBoxStatus.ariaLabel = 'loading, please wait...'

      setTimeout(() => {
        borderTickSvg.style.display = "none"
        clickableSvg.style.display = 'block'
        clickableSvg.ariaLabel = clickableSvg.replace('unchecked', 'checked')
      }, 2000)

      checkBoxStatus.ariaLabel = 'todo is successfully unchecked'
    }

    function handleProgress() {
      const istickSvg = (tickSvg.style.display = "block");
      if (istickSvg) {
        incrementProgress();
      } else {
        decrementProgress();
      }
    }

    clickableSvg.addEventListener("click", handleProgress);
    tickSvg.addEventListener("click", decrementProgress);

  // ------------------------------------------------------------------------------------------------------------

  dropDowmLists.style.display = "block";
  dropUp.style.display = "none";
  dropDowm.style.display = "block";
});

// dropup icon 
dropDowm.addEventListener("click", () => {
  dropDowmLists.style.display = "none";
  dropDowm.style.display = "none";
  dropUp.style.display = "block";
});

document.addEventListener('DOMContentLoaded', () => {

  dropUp.addEventListener('keydown', (event) => {
    // Check if the space or tab key is pressed
    if (event.key === ' ' || event.key === 'Tab') {
        
        event.preventDefault();
  // keyboard events
  // keybord evens for section element

  const toDoItems = document.querySelectorAll('[role="listitem"]');
  // console.log(toDoItems)
  
  // toDoItems.item(0).setAttribute('tabindex', '0');
  
  toDoItems.item(0).focus();
  
  toDoItems.forEach((toDoItem) => {
    function handletoDoItemsKeypress(e) {
      console.log(e);
  
      // Find the index of the current item
      const currentIndex = Array.from(toDoItems).indexOf(toDoItem);
  
      // getting first element
      const firstTodoItem = currentIndex === 0;
      console.log(firstTodoItem);
  
      // getting last element
      const lastTodoItem = currentIndex === toDoItems.length - 1;
      // console.log(lastTodoItem)
  
      // getting next menu item
      const nextTodoItem = toDoItems[currentIndex + 1];
      // console.log(nextTodoItem)
  
      // getting previous menu item
      const previousTodoItem = toDoItems[currentIndex - 1];
      // console.log(previousTodoItem)
  
      function focusPreviousItem() {
        if (firstTodoItem) {
          toDoItems[toDoItems.length - 1].focus();
          return;
        }
        previousTodoItem.focus();
      }
  
      function focusNextItem() {
        if (lastTodoItem) {
          toDoItems[0].focus();
          return;
        }
        nextTodoItem.focus();
      }
  
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        focusPreviousItem();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        focusNextItem();
      }
    }
  
    // console.log(toDoItem)
    toDoItem.addEventListener('keyup', handletoDoItemsKeypress);
  }); 
    }
});

}) 

    // ------------------------------------------------------

    let checkLists = document.querySelectorAll(".checkList");

    checkLists.forEach((checkList) => {
      const infoCheckList = checkList.nextElementSibling;
      const parentElement = checkList.parentElement;

      checkList.addEventListener("click", () => {
        checkLists.forEach((otherCheckList) => {
          const otherInfoCheckList = otherCheckList.nextElementSibling;

          if (otherInfoCheckList !== infoCheckList) {
            otherInfoCheckList.style.display = "none";
          }
        });

        if (infoCheckList.style.display === "block") {
          infoCheckList.style.display = "none";
          parentElement.style.backgroundColor = "inherit";
        } else {
          checkLists.forEach((otherCheckList) => {
            otherCheckList.parentElement.style.backgroundColor = "inherit";
          });
          infoCheckList.style.display = "block";
          parentElement.style.backgroundColor = "#F3F3F3";
        }
      });
    });
  }); // ----------------------------------------------------------

  
