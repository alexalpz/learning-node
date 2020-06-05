var request = require('request')

//Testing with jasmine
describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2 * 2).toBe(4)
    })
})

//Installed http request package
describe('get messages',() => {
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000/messages',(err,res) => {
            console.log(res.body)
            //We need to call done everytime our asynchronouse code finishes
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    //Checks items in message array
    it('should return a list thats not empty', (done) => {
        request.get('http://localhost:3000/messages',(err,res) => {
            console.log(res.body)
            //We need to call done everytime our asynchronouse code finishes
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})





