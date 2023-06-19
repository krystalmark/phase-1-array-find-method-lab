function superbowlWin(array) {

    let win = array.find(function(element){

        return element.result === "W"
    })

    if (win) {
        
        return win.year;
        
    } else {

        return undefined;
        
    }
}
