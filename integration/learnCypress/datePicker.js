
describe("Verify the date Picker functionality", () => {

    it.only('validate the date Picker', () => {
        let date = new Date()                   //in built hai
        date.setDate(date.getDate() + 200)         //set date for after 200 days
                     //currentDate + nxtdays
        let year = date.getFullYear()
        let month = date.getMonth()             //number madhe yeto month
        let month = date.toLocaleString('default', { month: "long" })  //to convert month number into local string
        let da = date.getDate()
        cy.log(year)
        cy.log(month)     
        cy.log(da)
        cy.visit('http://demo.automationtesting.in/Datepicker.html')
        cy.get('.col-xs-1').click()
        function SelectYearMonth() {
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    SelectYearMonth()                    //recursive function
                     //multiple times call kraychy till getting yr n month
                }
            })

            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                if (!el.text().includes(month)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    SelectYearMonth()             //recursive hai 
                } 
            })

            function SelectDate() {
                cy.get('.ui-state-default').contains(da).click({ force: true })
            }
            SelectDate()           // call baher kely cuz ekch date haviy
        }
        SelectYearMonth()
    })
})





// class student{
//     constructor(name,age){
//         this.name = "Kranti",
//         this.age = 23
//     }
//     displayName(){
//         console.log('my name is : ',this.name)
//     }
// }
// let obj = new student();
// console.log(obj.age)
// console.log(obj.name)
// obj.displayName()




