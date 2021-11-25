

let div = document.createElement("div");
div.style.display = "flex"
div.style.justifyContent = "center"


let para = document.createElement("p");
para.setAttribute("id", "ph");

div.appendChild(para);
document.body.appendChild(div);

setTimeout(() => {
    document.getElementById("ph").innerText = "10";
    setTimeout(() => {
        document.getElementById("ph").innerText = "09"
        setTimeout(() => {
            document.getElementById("ph").innerText = "08"
            setTimeout(() => {
                document.getElementById("ph").innerText = "07"
                setTimeout(() => {
                    document.getElementById("ph").innerText = "06"
                    setTimeout(() => {
                        document.getElementById("ph").innerText = "05"
                        setTimeout(() => {
                            document.getElementById("ph").innerText = "04"
                            setTimeout(() => {
                                document.getElementById("ph").innerText = "03"
                                setTimeout(() => {
                                    document.getElementById("ph").innerText = "02"
                                    setTimeout(() => {
                                        document.getElementById("ph").innerText = "01"
                                        setTimeout(() => {
                                            document.getElementById("ph").innerText = "Happy BirthDay!"
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)

                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)