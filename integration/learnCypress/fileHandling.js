//<reference types = "cypress"></reference>

describe("File handling", () => {

  it('TC-1 : SINGLE FILE UPLOAD USING PLUGIN', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    var img = "demo.png"
    cy.get('#file-upload').attachFile(img)
    cy.get('input[type="submit"]').click()
    cy.get('#uploaded-files').contains(img).then(el => {
      var elText = el.text().trim()
      // Removes the leading and trailing white space and line terminator characters from a string.
      expect(elText).to.eqls(img)
    })
  })

  //                                            funt expression
  it("TC-2: upload MULTIPLE FILES WITH PLUGIN", function () {
    cy.visit('https://www.igniteui.com/file-upload/multiple-upload');
    var imgSet = ['photo.jpg', "pic.png"]
    cy.get('#igUpload1_ibb_fp').attachFile(imgSet)
    cy.get('button[title="Upload"]').click()
    cy.get('#igUpload1_spbtncncl_lbl').should('have.text', "Done")
    cy.get('#igUpload1_fc').children('div').should('have.length', imgSet.length)
    //id mei children hai div
  })

  it.skip(" DOWNLOADING FILE FROM BROWSER ", () => {
    //cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','download1.jpg')
    //                                                                        folder path      file inside this folder
    cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
      'cypress/fixtures/downloads', "check.txt")
  })

  it("SelectFile command added in above 9.3 versions of cypress", () => {
    cy.visit('https://the-internet.herokuapp.com/upload')

    let image = 'cypress/fixtures/photo.jpg'
    cy.get('#file-upload').selectFile(image)
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').then(el => {
      var elText = el.text().trim()          // to removes spaces after n before of string
      expect(elText).to.eql('photo.jpg')
    })
  })

  it.skip("MULTIPLE FILES UPLOAD using selectFile", () => {
    cy.visit('https://postimages.org/')
    cy.get('span[style="margin-top:10px"]').selectFile(['cypress\\fixtures\\media\\demo.png.jpg',
      'cypress/fixtures/media/pic.png'],
      { action: 'drag-drop' })

    cy.get('div[class="imagetitle"]').eq(0).should("have.text", "demo.png")
    cy.get('div[class="imagetitle"]').eq(1).should("have.text", "pic")

  })


  //---------------------- write_read files --------------------------------------

  it.only('TO WRITE IN FILE', () => {
    cy.writeFile('kranti.pdf', "Welcome to the world of Minskole..!\n")
    //          path of folder  , content of folder  
    cy.writeFile('kranti.pdf', "I am from COEP.\n", { flag: 'a+' })   //append new contents with old content
    cy.writeFile('kranti.pdf', "I am learning cypress automation.", { flag: 'a+' })
  })

  it.only("write json file in fixture file", () => {
    cy.writeFile('cypress\\fixtures\\fileHandling.json', {
      fullName: "Kranti Chavan",
      email: "chavankranti99@gmail.com",
      password: "kkk@23"
    })
  })

  it.only('Read File', () => {
    cy.readFile('kranti.pdf').then(data => {
      expect(data).to.includes('COEP')
      //.includes('I am from COEP.')
    })
  })

  it.only('write json test data in fixture file', () => {
    cy.fixture('fileHandling').then((data) => {
      cy.log(data)
      //cy.log(data.fullName)
      expect(data.fullName).to.eql('Kranti Chavan')
      expect(data.password).to.equals('kkk@23')
    })
  })
  
})








