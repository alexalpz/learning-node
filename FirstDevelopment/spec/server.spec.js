var request = require('request')

//Testing with jasmine
describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2 * 2).toBe(4)
    })
})


describe('get messages',() => {
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000/messages',(err,res) => {
            console.log(res.body)
            expect(res.statusCode).toEqual(200)
            done()
        })
    })

    it('should return a list thats not empty', (done) => {
        request.get('http://localhost:3000/messages',(err,res) => {
            console.log(res.body)
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})


describe('Get messsages from user', () => {
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000/messages/emily',(err,res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    //Must convert body to JSON
    //[0] checks first elenent in array and checks .name.
    it('Name should be Emily', (done) => {
        request.get('http://localhost:3000/messages/Emily',(err,res) => {
            expect(JSON.parse(res.body)[0].name).toEqual('Emily')
            done()
        })
    })
} )


