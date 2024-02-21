export class apiMethods{

    listUsersByPage(page){
        return cy.request({
            method:'GET',
            url:`https://reqres.in/api/users?page=${page}`,
            failOnStatusCode: false,
        })
    }

    getUserById(userID){
        return cy.request({
            method:'GET',
            url:`https://reqres.in/api/users/${userID}`,
            failOnStatusCode: false,
        })
    }

    getUnknownById(unknownId){
        return cy.request({
            method:"GET",
            url:`https://reqres.in/api/users/${unknownId}`,
            failOnStatusCode: false,
        })
    }

    getUnknownData(){
        return cy.request({
            method:'GET',
            url:'https://reqres.in/api/unknown',
            failOnStatusCode: false,
        })
    }

    createUser(user){
        return cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            failOnStatusCode: false,
            body: user,
        })
    }

    updateUser(userId, updatedUserData){
        return cy.request({
            method: 'PUT',
            url: `https://reqres.in/api/users/${userId}`,
            failOnStatusCode: false,
            body:updatedUserData

        })
    }

    patchUser(userId, patchedUserData) {
        return cy.request({
          method: 'PATCH',
          failOnStatusCode: false,
          url: `https://reqres.in/api/users/${userId}`,
          body: patchedUserData,
        })
    }


    deleteUser(userId) {
        return cy.request({
          method: 'DELETE',
          url: `https://reqres.in/api/users/${userId}`,
          failOnStatusCode: false
        });
      }

    registerUser(user) {
        return cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/register',
          failOnStatusCode: false,
          body: user,
        });
      }
    
    loginUser(user) {
        return cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/login',
          failOnStatusCode: false,
          body: user,
        });
      }
    
    getUsersWithDelay(delaySeconds) {
        return cy.request(`https://reqres.in/api/users?delay=${delaySeconds}`);
      }
}