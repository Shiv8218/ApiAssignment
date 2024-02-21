import { apiMethods } from "../../ApiMethods/apiMethods";  
import ApiData from "../../fixtures/ApiData.json"

const methodObj = new apiMethods

describe('API Testing',()=>{


    it('1. GET Request: List Users on Page 2',()=>{
        methodObj.listUsersByPage(ApiData.pageID).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property("data")
            expect(response.body.page).to.eq(ApiData.pageID);
        })
    })

    it('2. GET Request: Get User by ID',()=>{
        methodObj.getUserById(ApiData.pageID).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.data.id).to.eq(ApiData.pageID);
        })
    })

    it('3. GET Request: Get user by ID which is not present in database',()=>{
        methodObj.getUserById(ApiData.invalidID).then((response)=>{
            expect(response.status).to.eq(404);
            if(response.status===404)
            cy.log('User not found. Considered as a passing scenario.')

        })
    })

    it('4. GET Request: Get List of Unknown Data',()=>{
        methodObj.getUnknownData().then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data).to.have.length.greaterThan(0)
        })
    })

    it('5. GET Request: Get single user from Unknown Data',()=>{
        methodObj.getUnknownById(ApiData.unknownValidID).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(ApiData.unknownValidID);
        })
    })

    it('6. GET Request: Get Unknown Data by ID which is not present in database',()=>{
        const unknownId = ApiData.unknownInValidID
        methodObj.getUnknownById(unknownId).then((response)=>{
            expect(response.status).to.eq(404)
            expect(response.body.data).to.eq(undefined)
        })
    })

    it('7. POST Request: Create User',()=>{
        const newUser = {name:ApiData.name,job:ApiData.job}
        methodObj.createUser(newUser).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(newUser.name)
            expect(response.body.job).to.eq(newUser.job)

            let createdUserId = response.body.id;
            // Store the user ID in the local storage
            window.localStorage.setItem('createdUserId', createdUserId)
        })
    })

    it('8. POST Request: Create User Without Data',()=>{
        const newUser = {}
        methodObj.createUser(newUser).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property("id");
            expect(response.body).to.have.property("createdAt")
            
        })
    })

    it('9. PUT Request: Update user',()=>{
        const userID = localStorage.getItem('createdUserId')
        const updatedUserData = {name:ApiData.newName,job:ApiData.newJob}
        methodObj.updateUser(userID,updatedUserData).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(updatedUserData.name)
            expect(response.body.job).to.eq(updatedUserData.job)
        })
    })


    it('10. PATCH Request: Patch User',()=>{
        const userID = localStorage.getItem('createdUserId')
        const patchedUserData = {job:ApiData.updatedJob}
        methodObj.patchUser(userID,patchedUserData).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.job).to.eq(patchedUserData.job)
        })

    })

    it('11. DELETE Request: Delete User', () => {
        const userIdToDelete = localStorage.getItem('createdUserId');
    
        methodObj.deleteUser(userIdToDelete).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
    
    it('12. POST Request: Register User Successful', () => {
        
        const newUser = {
          email: ApiData.email,
          password: ApiData.password,
        };
    
        methodObj.registerUser(newUser).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("id");
          expect(response.body).to.have.property("token");
        });
      });

    it('13. POST Request: Register Unsuccessful <Without Password>', () => {
        const newUser = {
          email: ApiData.email,
        };
    
        methodObj.registerUser(newUser).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("error");
        });
      });

      it('14. POST Request: Register Unsuccessful <Without email>', () => {
        const newUser = {
          password: ApiData.password,
        };
    
        methodObj.registerUser(newUser).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("error");
        });
      });

      it('15. POST Request: Register Unsuccessful <Without any details>', () => {
        const newUser = {};
    
        methodObj.registerUser(newUser).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("error");
        });
      });

      it('16. POST Request: Register Unsuccessful <Using Symbols>', () => {
        const newUser = {
          email: ApiData.symbol,
          password:ApiData.symbol
        };
    
        methodObj.registerUser(newUser).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("error");
        });
      });
    
    it('17. POST Request: Login User Success', () => {
        const userToLogin = {
          email: ApiData.email,
          password: ApiData.password,
        };
    
        methodObj.loginUser(userToLogin).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
      
    it('18. POST Request: Login User Rejected <Without password>', () => {
        const userToLogin = {
          email: ApiData.email,
        };
    
        methodObj.loginUser(userToLogin).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("error");
    
        });
      });

    it('19. POST Request: Login User Rejected <Without email>', () => {
        const userToLogin = {
          password: ApiData.password,
        };
    
        methodObj.loginUser(userToLogin).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("error");
    
        });
      });

    it('20. POST Request: Login User Rejected <Without any details>', () => {
        const userToLogin = {};
    
        methodObj.loginUser(userToLogin).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("error");
    
        });
      });

    it('21. POST Request: Login User Rejected <Using Symbols>', () => {
        const userToLogin = {
          email: ApiData.symbol,
          password:ApiData.symbol
        };
    
        methodObj.loginUser(userToLogin).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property("error");
    
        });
      });

      
    
    it('22. GET Request: Get Users with Delay', () => {
        const delaySeconds = ApiData.delaySeconds;
    
        methodObj.getUsersWithDelay(delaySeconds).then((response) => {
          expect(response.status).to.eq(200);
        });
      });


      
})

