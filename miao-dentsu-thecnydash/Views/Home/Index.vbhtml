@Code
    ViewData("Title") = "Home Page"
End Code

<div class="row">
    <div id="gameWrapper"></div>
</div>

@Section scripts
    <script src="~/js/phaser.js"></script>
    <script src="~/js/game.js"></script>
    <script>
        $(function () {
            cnyDash();
        })
    </script>
End Section
