if (typeof AmazonCognitoIdentity === 'undefined') {
    console.error('AmazonCognitoIdentity no está definido. Asegúrate de que el script se ha cargado correctamente.');
    return;
}

AWS.config.region = 'us-west-2';

const poolData = {
    UserPoolId: 'us-west-2_RhboYT6sp',
    ClientId: '5gl3l1qnneeb1bng72g63c53is',
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function signUp(username, email, password) {
    return new Promise((resolve, reject) => {
        const attributeList = [
            new AmazonCognitoIdentity.CognitoUserAttribute({
                Name: 'email',
                Value: email
            })
        ];

        userPool.signUp(username, password, attributeList, null, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.user);
            }
        });
    });
}

function signIn(username, password) {
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password,
    });

    const userData = {
        Username: username,
        Pool: userPool
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                resolve(result);
            },
            onFailure: (err) => {
                reject(err);
            },
        });
    });
}