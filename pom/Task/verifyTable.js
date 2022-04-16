class tableStruct{
    buildStructure(elem,passArray,passIndexNum,passCityArr){
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')

        cy.get(elem).each((el,index)=>{
            if(el.text() == passArray[index]){
                cy.get('.tsc_table_s13 tbody tr').eq(index).find('td').eq(passIndexNum).then(el=>{

                    expect(el.text()).to.eq(passCityArr)
                })
            }
        })

    }
}

export default tableStruct;