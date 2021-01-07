
loadtime = () => {
    let current = new Date();
    let v = current.getHours();
    let x = current.getMinutes();
    setTimeout(loadtime, 1000);
    ho.innerText = `${v}:`
    mi.innerText = x
    ho2.innerText = `${v} :`
    mi2.innerText = x;
    ampm.innerText = "AM"
    if (v > 12){
        ho.innerText = `${v-12}:`
        ho2.innerText = `${v-12} :`
        ampm.innerText = "PM"
    } else if(v == 0){
        ho.innerText = `12:`
        ho2.innerText = `12 :`
    } 
    if (x < 10){
        mi.innerText =  `0${x}`
        mi2.innerText =  `0${x}`
    }
    let xx = current.getDate();
    let yy = current.getMonth();
    let zz = current.getDay();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    
    monthget.innerText = months[yy]
    dateget.innerText = ` ${xx}`
    dayget.innerText = day[zz]
}