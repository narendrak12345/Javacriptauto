const WaitAndClick=(element,timeout)=>{

browser.waitUntil(function(){element.click()},{timeout}
);
};
