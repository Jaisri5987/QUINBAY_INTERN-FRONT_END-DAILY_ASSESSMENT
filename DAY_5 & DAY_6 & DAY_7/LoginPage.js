// import { mapActions } from 'vuex'
// export default {
//     name: "LoginPage",
//     data() {
//         return {
//             user: { userName: "", userPass: "" },
//             user_details: [
//                 { 
//                     userName: "jaisri", 
//                     userPass: "Jaisri@123" 
//                 },
//                 { 
//                     userName: "malishka", 
//                     userPass: "malishka@1612" 
//                 },
//                 { 
//                     userName: "sowbarnika", 
//                     userPass: "711@sowba" 
//                 },
//                 { 
//                     userName: "sripriya", 
//                     userPass: "sri@123priya" 
//                 }
//             ]
//         }

//     },
//     methods: {
//         ...mapActions(['getdetails']),
//         login() {

//             let userdet = this.user_details.find(detail => this.user.name === detail.name && this.user.pass == detail.pass)

//             if (userdet) {
//                 this.getdetails(userdet)

//             } else {
//                 alert('Incorrect password or username !!!!')
//             }

//             // this.$emit('loggedin',userFound)
//             // this.$emit('user',userFound.name)
//         }
//     }
// }





// export default{
//     name:"logincomponent",
//     data()
//     {
//     },
    // mounted(){
    //         if(localStorage.name)
    //             this.name=localStorage.name;
    //         if(localStorage.age)
    //             this.age=localStorage.age;
    //     },
    //     methods: {
    //         persist() {
    //             localStorage.name = this.name;
                
    //         }
    //     }


import { mapActions } from 'vuex'
export default {
    name: "LoginPage",
    data() {
        return {
            users: { name: "", pass: "" },
            user_data: [
                { 
                    name: "jaisri", 
                    pass: "Jaisri@123" 
                },
                { 
                    name: "malishka", 
                    pass: "malishka@1612" 
                },
                { 
                    name: "sowbarnika", 
                    pass: "711@sowba" 
                },
                { 
                    name: "sripriya", 
                    pass: "sri@123priya" 
                }
               ]
        }

    },
    methods: {
        ...mapActions(['getUser']),
        loginCheck(e) {
                e.preventDefault();
            let userFound = this.user_data.find(user => this.users.name === user.name && this.users.pass == user.pass)
            alert("login")
            if (userFound) {
                this.getUser(userFound)
                this.$router.push('/home')

            } else {
                alert('incorrect password and username')
            }

            
        },
        guest()
        { 
            this.$router.push('/home')
   
        }
    }
}
