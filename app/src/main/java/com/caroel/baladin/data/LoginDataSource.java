package com.caroel.baladin.data;

import com.caroel.baladin.data.model.LoggedInUser;

import java.io.IOException;

/**
 * Class that handles authentication w/ login credentials and retrieves user information.
 */
public class LoginDataSource {

    public Result<LoggedInUser> login(String username, String password) {

        String usernameBd = "elissonmaycon@gmail.com";
        String passwordBd = "imundosupremo";
        // TODO: handle loggedInUser authentication
        if (username == usernameBd && password == passwordBd) {
            LoggedInUser fakeUser =
                    new LoggedInUser(
                            java.util.UUID.randomUUID().toString(),
                                "Elisson Santos");
            return new Result.Success<>(fakeUser);
        } else {
            return new Result.Error(new IOException("Error logging"));
        }
    }

    public void logout() {
        // TODO: revoke authentication
    }
}
