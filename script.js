'use strict';

const userTextTitle = document.querySelector(".userTextTitle");
const userTextMessage = document.querySelector(".userTextMessage");

const chapter1Text = document.querySelector(".chapter1");
const chapter2Text = document.querySelector(".chapter2");
const chapter3Text = document.querySelector(".chapter3");

const messagePost = document.querySelector(".messagePost");

let chapter1FillFlag = false;
let chapter2FillFlag = false;
let chapter3FillFlag = false;

let chaptersTextArray = [];

function submitMessage() {
    sessionStorage.setItem("chapterTitleFill", userTextTitle.value);
    sessionStorage.setItem("chapterMessageFill", userTextMessage.value);
    chapterRewrite();

}

messagePost.addEventListener("click", submitMessage);

function cellDefine() {
    if (chapter1FillFlag == false && chapter2FillFlag == false && chapter3FillFlag == false) {
        chapter1Text.innerHTML = `<h2>${chaptersTextArray[chaptersTextArray.length - 1][0]}</h2><br/><p><i>${chaptersTextArray[chaptersTextArray.length - 1][1]}</i></p>`;
        chapter1FillFlag = true;
    } else if (chapter1FillFlag == true && chapter2FillFlag == false && chapter3FillFlag == false) {
        chapter2Text.innerHTML = `<h2>${chaptersTextArray[chaptersTextArray.length - 1][0]}</h2><br/><p><i>${chaptersTextArray[chaptersTextArray.length - 1][1]}</i></p>`;
        chapter2FillFlag = true; 
    } else if (chapter1FillFlag == true && chapter2FillFlag == true && chapter3FillFlag == false) {
        chapter3Text.innerHTML = `<h2>${chaptersTextArray[chaptersTextArray.length - 1][0]}</h2><br/><p><i>${chaptersTextArray[chaptersTextArray.length - 1][1]}</i></p>`;
        chapter3FillFlag = true; 
    } else if (chapter1FillFlag == true && chapter2FillFlag == true && chapter3FillFlag == true) {
        chapter3Text.innerHTML = `<h2>${chaptersTextArray[chaptersTextArray.length - 1][0]}</h2><br/><p><i>${chaptersTextArray[chaptersTextArray.length - 1][1]}</i></p>`;
        chapter2Text.innerHTML = `<h2>${chaptersTextArray[chaptersTextArray.length - 2][0]}</h2><br/><p><i>${chaptersTextArray[chaptersTextArray.length - 2][1]}</i></p>`;
        chapter1Text.innerHTML = `<h2>${chaptersTextArray[chaptersTextArray.length - 3][0]}</h2><br/><p><i>${chaptersTextArray[chaptersTextArray.length - 3][1]}</i></p>`;
    }
}

function chapterRewrite() {
    chaptersTextArray.push([sessionStorage.getItem("chapterTitleFill"), sessionStorage.getItem("chapterMessageFill")]);

    cellDefine();
}
