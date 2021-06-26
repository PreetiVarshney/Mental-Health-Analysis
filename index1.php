<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login System</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <section class="left-section">
        <div id="left-cover" class="cover cover-hide">
            <img src="img/cover.png" alt="">
            <h1>Welcome !</h1>
            <h3>Already have an account ?</h3>
            <button type="button" class="switch-btn" onclick="location.reload()">Login</button>
        </div>
        <div id="left-form" class="form fade-in-element">
            <h1>Login</h1>
            <form action="login.php" method="post">
                <input type="text" name="user-name" class="input-box" placeholder="User Name">
                <input type="password" name="user-pass" class="input-box" placeholder="Password">
                <input type="submit" name="login-btn" class="btn" value="Login">
            </form>
        </div>
    </section>

    <section class="right-section">
        <div id="right-cover" class="cover fade-in-element">
            <img src="img/cover.png" alt="">
            <h1>Welcome !</h1>
            <h3>Don't have an account ?</h3>
            <button type="button" class="switch-btn" onclick="switchSignup()">Signup</button>
        </div>
        <div id="right-form" class="form form-hide">
            <h1>Signup</h1>
            <form action="signup.php" method="post">
                <input type="text" name="user-name" class="input-box" placeholder="User Name" required>
                <input type="email" name="user-email" class="input-box" placeholder="Email" required>
                <!-- <input type="password" name="user-pass" id="original" class="input-box" placeholder="Password">
                <input type="password" id="confirm" class="input-box" placeholder="Confirm Password"> -->
                <!-- priyanshu -->
                <input name="user-pass" id="password" type="password" class="input-box" placeholder="Password" required onkeyup='check();' />
                <div id='message'></div>
                <input type="password" id="confirm_password" class="input-box" placeholder="Confirm Password" required onkeyup='check();' />
                
                <input type="submit" name="signup-btn" class="btn" value="Signup">
            </form>
        </div>
    </section>

    <script src="js/main.js"></script>

</body>

</html>