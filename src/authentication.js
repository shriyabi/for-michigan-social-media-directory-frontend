const authorizedEmails = [
    'quinton@4mich.org',
    'abbie@4mich.org',
    'lelann@4mich.org',
    'camille@4mich.org',
    'ben@4mich.org',
    'tyler@4mich.org',
    'erica@4mich.org',
    'rylan@4mich.org',
    'aaeshah@4mich.org',
    'ali@4mich.org',
    'shriya@4mich.org'
]; 

function onSignIn(user){
    const profile = user.getBasicProfile(); 
    const email = profile.getEmail(); 
    if(authorizedEmails.includes(email)){
        alert('Welcome, ' + profile.getName() + '!');
    } else {
        alert('Unauthorized user.');
        // Sign out the user
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
          console.log('User signed out.');
        });
    }
}
function initClient() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      }).then(() => {
        // Attach the click handler to the sign-in button
        gapi.signin2.render('signin-button', {
          'scope': 'profile email',
          'onsuccess': onSignIn
        });
      });
    });
  }
  window.onload = initClient; 