<?php
if($_POST["Sign Up"]) {
  $recipient = "ReplitCoders@outlook.com";
  $subject = "Sign Up";
  $replusername = $_POST["replit"];
  $senderEmail = "ReplCoders@outlook.com";
  $github = $_POST["github"];

  $mailBody = "Replit username is $replusername\n GitHub username is $github";

  mail($recipient, $subject, $mailBody, "From: $replusername <$senderEmail");

  $thankYou = "<p>Thanks ur email has been sent 😁</p>";
}
?>
<!-- This was made with https://htmldog.com/techniques/formtoemail/ -->
<!DOCTYPE html>
<html lang="en" class="signup">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Sign Up Here!</title>
		<link rel="stylesheet" href="style.css" />
	</head>

	<body>
		<header>
			<h1 class="center">
				<a class="enlarge" href="https://about-page.whippingdot.repl.co/"
					>About Us!</a
				>

        <div class="theme-switch-wrapper">
					<label class="theme-switch" for="checkbox">
						<input type="checkbox" id="checkbox" />
						<div class="slider round"></div>
            <p id="toggle">Dark Mode<br/>Toggle</p>
					</label>
				</div>
			</h1>
      <script>
        const toggleSwitch = document.querySelector(
          '.theme-switch input[type="checkbox"]'
        );

        function switchTheme(e) {
          if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
          } else {
            document.documentElement.setAttribute("data-theme", "light");
          }
        }

        toggleSwitch.addEventListener("change", switchTheme, false);
      </script>
			<ul id="navbar">
				<li><a href="/BD103">BD103's Portfolio</a></li>
				<li><a href="/ch1ck3n">ch1ck3n's Portfolio</a></li>
				<li><a href="/Codemonkey51">Codemonkey51's Portfolio</a></li>
				<li><a href="/CodingRedpanda">CodingRedpanda's Portfolio</a></li>
				<li><a href="/ColePete">ColePete's Portfolio</a></li>
				<li><a href="/darkdarcool">darkdarcool's Portfolio</a></li>
				<li><a href="/elipie">elipie's Portfolio</a></li>
				<li><a href="/EpicRaisin">EpicRaisin's Portfolio</a></li>
				<li><a href="/forer">forer's Portfolio</a></li>
				<li><a href="/headiscoding">headiscoding's Portfolio</a></li>
				<li><a href="/isaiah08">isaiah08's Portfolio</a></li>
				<li><a href="/JBloves27">JBloves27's Portfolio</a></li>
				<li><a href="/programmeruser">programmeruser's Portfolio</a></li>
				<li><a href="/whippingdot">whippingdot's Portfolio</a></li>
				<li><a href="/zplusfour">zplusfour's Portfolio</a></li>
			</ul>
			<div class="center">
				<ul id="navbar">
					<li><a href="/signup">Sign Up!</a></li>
				</ul>
			</div>
			<br />
		</header>
		<h1 class="center">Signing Up!</h1>
		<p class="center">
			This is where you sign up to join the GitHub organization!
		</p>
		<p class="center">
			We will just need a few things from you. We will need your repl.it account
			and your GitHub account for consideration. If we decide to allow you to
			join the organization you will get pinged on repl.it and/or GitHub.
		</p>
		<p class="center">
			I hope you signup as our community really <strong>needs you!</strong>
		</p>

    <?=$thankYou ?>
		<div class="center">
			<form method="post" action="https://About-Page.whippingdot.repl.co/secret">
				<label for="Username">Your Repl.It Username</label>
				<br />
				<input class="replit" name="Username" type="text" />
				<br /><br />
				<label for="GitHub">Your GitHub Username</label>
				<br />
				<input class="github" name="GitHub" type="text" />
				<br /><br /><br />
				<input class="submit" type="submit" name="Sign Up"/>
			</form>
		</div>
	</body>
</html>
