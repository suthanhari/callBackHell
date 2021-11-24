

let div = document.createElement("div");
div.style.display = "flex"
div.style.justifyContent = "center"


let para = document.createElement("p");
para.setAttribute("id", "ph");

div.appendChild(para);
document.body.appendChild(div);

setTimeout(() => {
    document.getElementById("ph").innerText = "1";
    setTimeout(() => {
        document.getElementById("ph").innerText = "2"
        setTimeout(() => {
            document.getElementById("ph").innerText = "3"
            setTimeout(() => {
                document.getElementById("ph").innerText = "4"
                setTimeout(() => {
                    document.getElementById("ph").innerText = "5"
                    setTimeout(() => {
                        document.getElementById("ph").innerText = "6"
                        setTimeout(() => {
                            document.getElementById("ph").innerText = "7"
                            setTimeout(() => {
                                document.getElementById("ph").innerText = "8"
                                setTimeout(() => {
                                    document.getElementById("ph").innerText = "9"
                                    setTimeout(() => {
                                        document.getElementById("ph").innerText = "10"
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