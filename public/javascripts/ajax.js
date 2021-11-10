window.onload = (event) => {
    fetch('https://ubahthebuilder.tech/posts/1')
        .then(res => {
            console.log(res)
        })        
}