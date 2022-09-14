new Promise ((resolve, reject) => {
    try {
        const data = "I am getting resolved.";
        resolve (data)
    }
    catch(e) {
        reject (new Error(e))
    }
})