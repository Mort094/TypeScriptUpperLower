new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        text: "",
        operation: "toUpper",
        result: ""
    },
    methods: {
        doIt() {
            //console.log("Say Hello " + this.name)
            if (this.text == "") {
                this.result = "Need some letters"
            }
            else {

                if (this.operation == "toUpper") 
                {
                    
                    this.result = this.text.toUpperCase() 
                }else if (this.operation == "toLower") {
                    this.result = this.text.toLowerCase();
                }

            }
        }
    }
})