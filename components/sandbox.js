let inbox_component=(()=>{
    return `<div id="inbox-body">
    <div id="inbox-mailpanel">
        <div id="mailpanel-bar">
            <div>
                <input id="inboxsearchbar" type="text" placeholder="Search...">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
                <div><i class="fa-solid fa-envelope-open"></i></div>
                <div><i class="fa-solid fa-arrows-rotate"></i></div>
                <div><i class="fa-solid fa-trash"></i></div>
                <div><i class="fa-solid fa-gear"></i></div>
            </div>
        </div>
        <div id="appendMail"></div>
        <div id="howitworks">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIHZpZXdCb3g9IjAgMCA5NSA5NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzcuOTY0IDQuODdjMTkuMjMyLTIuMTc0IDQ1LjAyNSAxMi4zNzQgNDcuMiAzMS42MDQgMi4xNzQgMTkuMjMtMTQuNjY5IDM1LjMwMy0zMy44NzcgMzcuNDc1LTE5LjIxIDIuMTcyLTM2LjU4NS0xMS42NjgtMzguNzYyLTMwLjkyMS0yLjE3Ny0xOS4yNTMgNi4yMy0zNS45ODUgMjUuNDM5LTM4LjE1N3oiIGZpbGw9IiMyMkQxNzIiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj48cGF0aCBkPSJNMzMuMTc2IDE0LjgxOGMxMy43MTggMS4wMyAyNy40MzUtLjE0NyA0MS4xNTMuMzY3IDYuMTM3LjIyMSAxMi4yNzQgMS4xNzcgMTguMzM5LjUxNSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zMy4xMDQgMTUuNTUzYzkuNzQ3LjY2MiAxOS41NjYuMzY4IDI5LjM4NS4yMiAxMC4xMDctLjA3MyAyMC4zNiAxLjQ3MSAzMC40NjcuNTkgMS4xNTYtLjA3NC42NS0xLjQ3MS0uMzYtMS4zOTgtOS42MDMuODgyLTE5LjQyMi0uNjYyLTI5LjAyNC0uNTg4LTEwLjEwOC4wNzMtMjAuMjE2LjUxNC0zMC4zMjQtLjIyLTEuMTU1LS4wNzQtMS4zIDEuMzIzLS4xNDQgMS4zOTZ6IiBmaWxsPSIjMUEyRTQ0Ii8+PHBhdGggZD0iTTkzLjQ2MiAxNC44OTJjLTQuMzMyIDAtOS4xNy0uMjItMTIuMTMtMy4zODMtMS44NzctMi4wNTktMi42Ny01LTQuNDA0LTcuMjA2LS43MjItLjk1NS0xLjY2LTEuNzY0LTIuODE1LTEuOTg1LTEuMDgzLS4yMi0yLjE2Ni4yMi0zLjEwNS43MzVhOC45NDUgOC45NDUgMCAwIDAtMy40NjUgNC4wNDVjLS42NSAxLjU0NC0xLjIyOCAzLjUyOS0yLjk2IDMuNTI5LS4zNjEgMC0uNzk1LS4xNDctMS4xNTYtLjI5NC0yLjAyMS0xLjEwMy0zLjI0OS0zLjMwOS01LjQ4Ny00LjE5MS0uNjUtLjI5NC0xLjQ0NC0uMzY4LTIuMTY2LS4yOTQtMi41MjcuNTE0LTIuNDU1IDMuMzgyLTQuMDQzIDQuNzc5LS44NjYuNzM1LTIuMDk0Ljk1Ni0zLjI0OSAxLjEwMy02LjY0Mi44MDktMTMuMjg0IDEuNDctMTkuOTk5IDEuOTEyLS40MzMgMC0uNDMzLjY2MSAwIC43MzUgMi43NDQuMzY4IDUuNTYuNjYyIDguMzAzLjY2MiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik05My40NjEgMTQuMjNjLTQuMjYgMC05LjE3LS4xNDctMTIuMDU3LTMuODk3LTEuODA1LTIuNDI3LTIuNTI3LTUuOTU2LTUuMTI2LTcuNzk0LTEuODA1LTEuMjUtMy44OTktMS4wMy01Ljc3NiAwLTEuMDEuNTg4LTEuOTUgMS40Ny0yLjY3MSAyLjQyNi0uNTA2LjY2Mi0uNzk0IDEuMzI0LTEuMTU2IDIuMDU5LS43MjEgMS4zOTctLjQzMyAyLjA1OS0yLjIzOCAyLjIwNi0yLjY3MS4yMi00LjQ3Ni0zLjc1LTcuNDM2LTQuMDQ0LTIuMzgzLS4yMi0zLjMyMSAxLjAzLTQuNTQ5IDIuNzk0LTIuODg3IDQuMjY0LTkuOTYzIDMuNzUtMTQuNjU2IDQuMTkxLTIuMzgyLjIyLTQuNzY1LjQ0MS03LjE0Ny41ODgtMS4yMjguMDc0LTIuMjM5LS4xNDctMy4xMDUuNzM2LS4yMTcuMjItLjM2MS41ODgtLjA3Mi44MDggMS41ODggMS45ODYgNy4wNzUgMS4yNSA5LjM4NiAxLjMyNCAxLjE1NSAwIDEuMDEtMS4zMjQtLjA3My0xLjM5Ny0uNTc3IDAtNi41Ny0uNjYyLTYuNzg2LS4xNDcuMTQ0LS40NDEgNi41Ny0uNTE1IDcuMTQ3LS41ODggNC4xMTYtLjM2OCA4Ljg4LS4yOTUgMTIuNzgtMS4zOTcgMS4yMjctLjM2OCAyLjE2NS0uNzM2IDMuMDMyLTEuNjkyLjcyMi0uODgyLjg2Ni0yLjIwNiAxLjY2LTMuMDE0IDMuMzk0LTMuMzgzIDYuNTcgMy43NSA5LjgyIDMuODIzIDEuODA0IDAgMi42Ny0xLjM5NyAzLjM5My0yLjg2OCAxLjM3MS0yLjUgNC4xMTUtNy41IDcuNzk3LTQuMTkgMS41ODggMS4zOTYgMi4zMSAzLjY3NiAzLjMyMSA1LjQ0IDMuMTc3IDUuNDQyIDguODggNS45NTYgMTQuNTg0IDUuOTU2IDEuMTU1IDAgMS4wMTEtMS4zMjMtLjA3Mi0xLjMyM3oiIGZpbGw9IiMxQTJFNDQiLz48L2c+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxKSI+PHBhdGggZD0iTTU4LjUwNCA5Mi41ODZjMCAuOTA5LTUuMTgzIDEuNjc4LTExLjU3MyAxLjY3OC0zLjA1MyAwLTcuMDI5LjI4LTkuMDg4IDAtMi4yNzItLjI4LTIuNDg1LTEuMTg5LTIuNDg1LTEuNjc4IDAtLjkxIDkuODY5LTEuNTM5IDE2LjI1OS0xLjUzOSA2LjM5IDAgNi44ODcuNjMgNi44ODcgMS41Mzl6IiBmaWxsPSIjMUEyRTQ0Ii8+PHBhdGggZD0iTTI5LjQ2NSA2Ny4yNzFjMS43NzUgMCAzLjEyNC4xNCAzLjA1My4yOC0uMjg0LjkwOS02LjgxNiAxMi44NjctNy4zODQgMTQuMTk1LS40MjYuOTEtNy44ODEgNy45NzMtMTQuNjI2IDcuOTczSDcuNTk3Yy02LjgxNiAwLTYuODg3LTcuNjkzLTYuNTMyLTguNjAyLjQ5Ny0xLjM5OCA2LjQ2MS0xMi43OTcgNi41MzItMTMuMzU3IDAtLjE0IDEuMzQ5LS4zNSAzLjA1My0uMzUgNC40MDItLjA3IDEzLjEzNS0uMTM5IDE4LjgxNS0uMTM5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yOS42MDcgNjcuOWMxLjM0OSAwIDEuOTE3LS44MzkgMS43NzUuMTQtLjA3MS41Ni0uNjM5IDEuMjU5LS45MjMgMS44MTgtLjc4MSAxLjM5OS0xLjQ5MSAyLjg2Ny0yLjI3MiA0LjI2Ni0xLjI3OCAyLjMwOC0yLjM0MyA1LjAzNS0zLjgzNCA3LjIwMy0xLjkxNyAyLjc5Ny01Ljc1MSA1LjEwNS04LjgwNCA2LjQzMy0zLjE5NSAxLjM5OS05Ljc5OCAyLjUxOC0xMi4yODMtLjY5OS0zLjgzNC01LjAzNSAxLjM0OS0xMS4yNTkgMy42MjEtMTUuNzM0LjM1NS0uNzcuODUyLTIuNTE4IDEuNDkxLTMuMDc3LjcxLS41NiA0LjQwMi0uMjEgNS42OC0uMjEgNS4xODMtLjA3IDEwLjM2Ni0uMTQgMTUuNTQ5LS4xNCAxLjEzNiAwIC44NTItMS4zMjgtLjE0Mi0xLjMyOC01LjA0MSAwLTEwLjA4Mi4wNy0xNS4wNTIuMDctMi4xMyAwLTYuMTc3LS43LTcuNjY4Ljk3OS0xLjc3NSAxLjg4OC0yLjc2OSA1LjUyNC0zLjkwNSA3Ljc2MkMxLjkxNyA3Ny4yLjQ5NyA3OS4yMjkuMTQyIDgxLjI1N2MtLjkyMyA1LjE3NSAzLjI2NiA5LjAyIDguMTY1IDkuMDkgNi4zMTkuMDcgMTMuNDktMi42NTYgMTcuMzk1LTcuOTAxIDEuNDkxLTIuMDI4IDIuNTU2LTQuNjg2IDMuNzYzLTYuOTkzIDEuMzQ5LTIuNTg4IDIuOTgyLTUuMTA1IDQuMDQ3LTcuODMyLjE0Mi0uMzUtLjIxMy0uNjMtLjQ5Ny0uNzctLjk5NC0uNDktMi40ODUtLjM1LTMuNTUtLjM1LTEuMjA3LjA3LS45MjMgMS40LjE0MiAxLjR6IiBmaWxsPSIjMUEyRTQ0Ii8+PHBhdGggZD0iTTQ1LjI5OCA2Ny40OGMuMTQyIDUuMTc2LjU2OCAyMCAuNzEgMjMuNzA3IDAgLjc3LS4yODQgMS4zMjktLjU2OCAxLjUzOS0xLjA2NS41NTktMy42OTIuNTU5LTQuODI4LS4yMS0uMzU1LS4yMS0uNzEtLjYzLS43MS0xLjM5OS0uMTQyLTYuMDg0LS40MjYtMTguNTMxLS41NjgtMjMuNjM2IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTQ0LjU4OCA2Ny41NWMuMDcxIDMuODQ3LjIxMyA3LjYyMy4zNTUgMTEuNDdsLjIxMyA2LjkyMmMuMDcxIDEuMzI5LjQyNiAzLjE0Ny4xNDIgNC40NzYtLjU2OCAyLjQ0Ny0zLjkwNSAyLjUxNy00Ljc1Ny0uMTQtLjIxMy0uNTYtLjA3MS0xLjc0OC0uMDcxLTIuMzc4LS4wNzEtMi41MTctLjE0Mi01LjAzNS0uMjEzLTcuNjIyLS4wNzEtNC4zMzYtLjIxMy04LjY3MS0uMjg0LTEzLjAwNyAwLTEuMTE5LTEuMzQ5LS44NC0xLjM0OS4xNGwuNDI2IDE3LjkwMmMuMDcxIDMuNzA2LS40OTcgMTAuNjMgNS43NTEgOC4zOTEgMy4yNjYtMS4xODggMS43NzUtNy4zNDIgMS42MzMtMTAtLjE0Mi01LjQ1NC0uMjg0LTEwLjkwOS0uNDk3LTE2LjI5MyAwLTEuMTg5LTEuMzQ5LS45MS0xLjM0OS4xNHoiIGZpbGw9IiMxQTJFNDQiLz48cGF0aCBkPSJNMzAuODg1IDY3LjU1YzUuNzUxIDAgMzMuMjk5LS4wNjkgMzYuNDIzLS4zNDkgMS43MDQtLjE0IDIuOTgyLTEuMTg4IDIuOTgyLTIuMzc3LS4wNzEtNC4xMjYgMC0xNy4xMzMgMC0yNy4wNjMgMC02LjcxNC01LjQ2Ny0xMi4yMzgtMTIuMjgzLTEyLjIzOEgyMi43MiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zMC44MTQgNjguNDZjOC44NzUgMCAxNy43NS0uMDcgMjYuNjI1LS4xNCAzLjE5NSAwIDYuNjc0LjI4IDkuNzk4LS4yMSA0LjY4Ni0uNyAzLjY5Mi01LjE3NSAzLjY5Mi04Ljc0MSAwLTcuMDYzLjA3MS0xNC4wNTYuMDcxLTIxLjExOS0uMDcxLTUuMTA1LTIuMzQzLTkuODYtNy4xNzEtMTIuMjM4LTUuMjU0LTIuNTg3LTEzLjIwNi0xLjM5OC0xOC44ODYtMS4zOThIMjIuNzkxYy0uODUyIDAtMS4xMzYgMS43NDgtLjE0MiAxLjc0OCAxMS41NzMgMCAyMy4xNDYtLjIxIDM0LjcxOSAwIDQuOTcuMTQgOS41MTQgMi41ODcgMTEuNDMxIDcuMjczIDEuMjA3IDMuMDA3Ljc4MSA2LjUwMy43ODEgOS42NVY2MS4zOTdjMCAyLjQ0Ny4zNTUgNC4yNjYtMi42OTggNC44OTUtMi44NC42My02LjM5LjE0LTkuMzAxLjE0LTguODc1LjA3LTE3Ljc1LjE0LTI2LjYyNS4xNC0uODUyLjE0LTEuMTM2IDEuODg4LS4xNDIgMS44ODh6IiBmaWxsPSIjMUEyRTQ0Ii8+PHBhdGggZD0iTTM4LjQ4MiA2Ny41NXMyLjc2OSAxLjMzIDMuNzYzIDIuMDk5Yy45OTQuNzY5IDMuMjY2IDEuMDQ5IDMuMjY2IDEuMDQ5VjY3LjU1aC03LjAyOXoiIGZpbGw9IiMxQTJFNDQiLz48cGF0aCBkPSJNNDMuNDUyIDQzLjE0NWM0LjQwMi0uMDcgOC44MDQtLjA3IDEzLjIwNiAwaDIuNDg1Yy4yMTMgMCAuNjM5LS4wNy44NTIgMCAuNTY4LjIxLjE0MiAwIC4xNDIgMC0uMTQyLS4yOC0uMjEzIDIuMDk4LS4yODQgMi40NDggMCAxLjI1OC0uMDcxIDIuNDQ3LS4xNDIgMy43MDYtLjA3MS44NCAxLjcwNC44NCAxLjc3NS0uMDcuMTQyLTIuMDk4LjYzOS00Ljg5NSAwLTYuOTIzLS4wNzEtLjI4LS40MjYtLjQyLS42MzktLjQyLTIuMDU5LS4zNS00LjQ3My0uMTQtNi42MDMtLjE0SDQzLjM4MWMtMS4wNjUuMDctMS4wNjUgMS40LjA3MSAxLjR6IiBmaWxsPSIjMUEyRTQ0Ii8+PHBhdGggZD0iTTU1LjMwOSA0Mi43OTVjMCAyLjAyOC0uMjEzIDQuMjY2LjE0MiA2LjIyNC4yODQgMS44ODggMy4wNTMuNDkgNC4yNi43Ljg1Mi4xNCAxLjU2Mi0xLjQ2OS42MzktMS42MDktLjc4MS0uMTQtMS40OTEuMDctMi4yNzIuMTQtLjM1NS4wNy0uOTIzLjIxLTEuMjc4LjA3LjA3MSAwIC4wNzEuMzUuMDcxLS4wN3YtLjQ5Yy0uMDcxLTEuODg4LS4wNzEtMy43MDYtLjA3MS01LjU5NCAwLS45NzktMS40OTEtLjIxLTEuNDkxLjYzeiIgZmlsbD0iIzFBMkU0NCIvPjxwYXRoIGQ9Ik05Ljg2OSA2Ny41NWMtMS43NzUgMC0zLjE5NS0uOTA5LTMuMTk1LTIuMDI3IDAtNi43ODQuMjEzLTE4Ljg4MS4zNTUtMjcuOTcyLjE0Mi02LjY0NCA1LjY4LTEyLjAyOCAxMi40MjUtMTEuOTU4aDIuOTExYzYuODg3IDAgMTIuNDI1IDUuNDU0IDEyLjQyNSAxMi4yMzctLjA3MSA5LjkzLS4wNzEgMjIuOTM3IDAgMjcuMDYzIDAgMS4yNTktMS4yNzggMi4zMDgtMi45ODIgMi4zNzgtNC40MDIuMzUtMTYuMTg4LjM1LTIxLjkzOS4yOHoiIGZpbGw9IiMxQTJFNDQiLz48cGF0aCBkPSJNMTAuMjI0IDY2Ljg1MWMtMy45MDUtLjQyLTIuNjI3LTUuNDU0LTIuNjI3LTguMTEyIDAtMi41ODcuMDcxLTUuMTc0LjA3MS03LjgzMi4wNzEtNS4xNzUtLjcxLTExLjI1OC41NjgtMTYuMjkzIDIuNjk4LTEwLjM1IDE4LjgxNS0xMS40NjkgMjMuOTk4LTIuNjU4IDIuNTU2IDQuNDA2IDEuNTYyIDEwLjE0IDEuNTYyIDE0Ljk2NXYxNS4xMDVjMCAuNDkuMTQyIDEuNDY5IDAgMS45NTgtLjQ5NyAxLjk1OC0yLjEzIDIuMzc4LTMuODM0IDIuNTg4LTEuOTg4LjIxLTQuMTE4LjE0LTYuMTA2LjE0LTQuNjE1LjA3LTkuMzAxLjA3LTEzLjkxNi4wNy0uOTIzIDAtMS40MiAxLjM5OC0uMjg0IDEuMzk4IDQuOTcgMCA5Ljk0IDAgMTQuOTEtLjA3IDIuNzY5LS4wNyA4LjAyMy43IDEwLjA4Mi0xLjY3OCAxLjc3NS0yLjAyOC43ODEtNi43ODQuNzgxLTkuMjMxIDAtNS44NzQgMC0xMS43NDguMDcxLTE3LjYyMi4wNzEtOC43NDItNS4wNDEtMTQuNzU2LTE0LjItMTQuODk2LTcuODEuMDctMTQuNjI2IDQuNjg2LTE1LjA1MiAxMy4wMDgtLjM1NSA2LjQzMy0uMjEzIDEzLjAwNi0uMjg0IDE5LjQ0LS4wNzEgMy45ODYtMS45MTcgMTAuNTYgMy42MjEgMTEuMTE5Ljg1Mi4xNCAxLjc3NS0xLjI1OS42MzktMS4zOTl6IiBmaWxsPSIjMUEyRTQ0Ii8+PHBhdGggZD0iTTM5LjMzNCA5My4yMTVjLTEuMDY1LTIuODY3LTEuNjMzLTYuMjk0LTMuNDc5LTguODExLS4xNDItLjIxLS43ODEtLjIxLS42MzkuMjEgMS4yMDcgMi45MzcgMi4yNzIgNS44NzQgMi4zNDMgOS4wOS4yMTMgMCAuNDI2IDAgLjcxLS4wN2EyMi4zNCAyMi4zNCAwIDAgMS0xLjc3NS0zLjcwNmMtLjA3MS0uMjgtLjc4MS0uMjgtLjcxLjA3LjI4NCAxLjEyLjU2OCAyLjIzOC42MzkgMy4zNTcuMjEzLS4wNy4zNTUtLjE0LjU2OC0uMTQtLjk5NC0uODQtMS43NzUtMS44MTgtMi40ODUtMi44NjctLjIxMy0uMjgtLjg1Mi0uMTQtLjU2OC4yMWExMy4xODMgMTMuMTgzIDAgMCAwIDIuNjI3IDMuMDA3Yy4xNDIuMTQuNjM5LjE0LjU2OC0uMTRhMjcuOTI1IDI3LjkyNSAwIDAgMC0uNjM5LTMuMzU3Yy0uMjEzIDAtLjQyNiAwLS43MS4wN2EyMi4zNDUgMjIuMzQ1IDAgMCAwIDEuNzc1IDMuNzA2Yy4xNDIuMjEuNzEuMzUuNzEtLjA3LS4wNzEtMy4yMTYtMS4xMzYtNi4yMjMtMi4zNDMtOS4yM2wtLjYzOS4yMWMxLjc3NSAyLjQ0NyAyLjM0MyA1Ljg3NCAzLjMzNyA4Ljc0LjE0Mi4xNC44NTIuMTQuNzEtLjI3OXoiIGZpbGw9IiMxQTJFNDQiLz48cGF0aCBkPSJNNDkuOTEzIDkyLjMwNmMuNzgxLTIuMDk4IDEuMjA3LTQuNjE1IDIuNDg1LTYuNDM0bC0uNjM5LS4yMWMtLjkyMyAyLjIzOC0xLjcwNCA0LjQwNi0xLjcwNCA2Ljg1NCAwIC4yOC40OTcuMzUuNjM5LjE0LjU2OC0uOTEuOTk0LTEuODE5IDEuMzQ5LTIuNzk4LS4yMTMtLjA3LS40MjYtLjE0LS43MS0uMTQtLjIxMy44NC0uNDI2IDEuNjA5LS40OTcgMi41MTggMCAuMjguNDI2LjQ5LjYzOS4yOGE4LjI4NCA4LjI4NCAwIDAgMCAxLjkxNy0yLjIzOGMuMjEzLS4yOC0uNDI2LS41Ni0uNjM5LS4yOC0uNDk3Ljc3LTEuMTM2IDEuNDY5LTEuODQ2IDIuMDk4LjIxMy4wNy40MjYuMjEuNjM5LjI4LjA3MS0uODQuMjg0LTEuNjc4LjQ5Ny0yLjUxOC4wNzEtLjM1LS41NjgtLjQ5LS43MS0uMTQtLjM1NS45OC0uNzgxIDEuODE5LTEuMjc4IDIuNzI4LjIxMy4wNy40MjYuMTQuNjM5LjE0LjA3MS0yLjM3OC44NTItNC41NDYgMS43MDQtNi43MTQuMTQyLS4yOC0uNDk3LS40OS0uNjM5LS4yMS0xLjM0OSAxLjg4OS0xLjc3NSA0LjQwNi0yLjU1NiA2LjU3NC0uMDcxLjIxLjU2OC40Mi43MS4wN3oiIGZpbGw9IiMxQTJFNDQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMCI+PHBhdGggZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcuMzI4IDEuNjU2KSIgZD0iTTAgMGg2N3YxNUgweiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwMSI+PHBhdGggZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyNC40MDQpIiBkPSJNMCAwaDcxdjcwSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+"
                alt="">

            <p>Choose your technology</p>

            <p>Copy configuration</p>

            <p>Paste configuration to your project</p>

            <p>Run your email sending code</p>

        </div>
    </div>
    <div id="inbox-infopanel">
        <h3>My Inbox</h3>
        <div id="disappeardata">
            <div id="infopanel-bar">
                <h5 style="color: blue; text-decoration: underline;">SMTP Settings</h5>
                <h5>Email Address</h5>
                <h5>Auto Forward</h5>
                <h5>Manual Fordward</h5>
                <h5>Team Members</h5>
            </div>
            <div id="infopanel-content">
                <div>
                    <h5>SMTP/POP3</h5>
                    <p>Use these settings to send messages directly from your email client or mail transfer agent.
                    </p>
                    <p><i style="color: red;" class="fa-solid fa-triangle-exclamation"></i><b> Don't disclose your username or password
                            as this may result in your inbox getting filled up
                            with spam.</b></p>
                    <p>Show Credentials</p>
                    <div id="url-credentials">
                        <div class="inbox-boxProp">
                            <table>
                                <tr>
                                    <td><b>SMTP</b></td>
                                </tr>
                                <tr>
                                    <td>Host:</td>
                                    <td>smpt.mailtrap.io</td>
                                </tr>
                                <tr>
                                    <td>Port:</td>
                                    <td>25 or 465 or 587 or 2525</td>
                                </tr>
                                <tr>
                                    <td>Username:</td>
                                    <td class="mailuser">bee30d66e96433</td>
                                </tr>
                                <tr>
                                    <td>Password:</td>
                                    <td id="mailpass" class="mailpass">30adbd2eeec60a</td>
                                </tr>
                                <tr>
                                    <td>Auth:</td>
                                    <td>PLAIN, LOGIN and CRAM-MD5</td>
                                </tr>
                                <tr>
                                    <td>TLS:</td>
                                    <td>Optional (STARTTLS on all ports)</td>
                                </tr>
                            </table>
                        </div>
                        <div class="inbox-boxProp">
                            <table>
                                <tr>
                                    <td><b>POP3</b></td>
                                </tr>
                                <tr>
                                    <td>Host:</td>
                                    <td>smpt.mailtrap.io</td>
                                </tr>
                                <tr>
                                    <td>Port:</td>
                                    <td>1100 or 9950</td>
                                </tr>
                                <tr>
                                    <td>Username:</td>
                                    <td class="mailuser">bee30d66e96433</td>
                                </tr>
                                <tr>
                                    <td>Password:</td>
                                    <td class="mailpass">30adbd2eeec60a</td>
                                </tr>
                                <tr>
                                    <td>Auth:</td>
                                    <td>USER/PASS, PLAIN, LOGIN, APOP and CRAM-MD5</td>
                                </tr>
                                <tr>
                                    <td>TLS:</td>
                                    <td>Optional (STARTTLS on all ports)</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <br>
                    <h4>Integrations</h4>
                    <select id="mailpanel-select"
                        aria-label="tabs_selector" name="tabs_selector">
                        <optgroup label="Command Line">
                            <option value="a">cURL</option>
                            <option value="">Telnet</option>
                        </optgroup>
                        <optgroup label="Ruby">
                            <option value="a">Ruby on Rails</option>
                            <option value="">Ruby (net/smtp)</option>
                        </optgroup>
                        <optgroup label="Python">
                            <option value="a">smtplib</option>
                            <option value="tab_django">Django</option>
                            <option value="a">Flask-Mail</option>
                        </optgroup>
                        <optgroup label="PHP">
                            <option value="tab_cakephp37">CakePHP 3.7+
                            </option>
                            <option value="a">CakePHP &lt; 3.7</option>
                            <option value="tab_codeigniter">CodeIgniter
                            </option>
                            <option value="a">FuelPHP</option>
                            <option value="tab_laravel" >Laravel 7+</option>
                            <option value="a" >PHPMailer</option>
                            <option value="tab_symfony" >Symfony 5+</option>
                            <option value="a" >WordPress</option>
                            <option value="tab_yii" >Yii Framework</option>
                            <option value="" >Zend Framework</option>
                        </optgroup>
                        <optgroup label="Node.js">
                            <option value="a" >Nodemailer</option>
                        </optgroup>
                        <optgroup label="Java, Scala">
                            <option value="" >Play-Mailer</option>
                        </optgroup>
                        <optgroup label="Perl">
                            <option value="tab_perl" >MIME::Lite</option>
                            <option value="a" >Net::SMTP
                            </option>
                        </optgroup>
                        <optgroup label="C#">
                            <option value="tab_csharp" >Plain C#</option>
                        </optgroup>
                        <optgroup label="Other">
                            <option value="a" >Postfix</option>
                        </optgroup>
                    </select>
                    <div>
                        <div id="code-terminal" class="inbox-boxProp">
                            <div id="code-first">var transport = nodemailer.createTransport({<br>
                                host: <span class="terminal-redtext">"smtp.mailtrap.io",</span><br>
                                port: 2525,<br>
                                auth: {<br>
                                user: <span class="mailuser" style="color: red;">"bee30d66e96433",</span><br>
                                pass: <span class="mailpass" style="color: red;">"30adbd2eeec60a"</span><br>
                                }<br>
                                });
                            </div>
                            <div style="display: none;">
                                play.mailer {<br>
                                host = <span class="terminal-redtext">"smtp.mailtrap.io",</span><br>
                                port = <span class="terminal-redtext">2525</span><br>
                                ssl = <span class="terminal-redtext">no</span><br>
                                tls =<span class="terminal-redtext">yes</span> <br>
                                user = <span class="terminal-redtext">"bee30d66e96433",</span><br>
                                password = <span class="terminal-redtext">"30adbd2eeec60a"</span><br>
                                }
                            </div>
                            <div id="code-second" style="display: none;">
                                MAIL_MAILER=<span class="terminal-redtext">smtp</span><br>
                                MAIL_HOST=<span class="terminal-redtext">"smtp.mailtrap.io",</span><br>
                                MAIL_PORT=<span class="terminal-redtext">2525</span><br>
                                MAIL_USERNAME=<span class="terminal-redtext">"bee30d66e96433",</span><br>
                                MAIL_PASSWORD=<span class="terminal-redtext">"30adbd2eeec60a"</span><br>
                                MAIL_ENCRYPTION=<span class="terminal-redtext">tls</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div style="display: none;">
                    <h5>Inbox Email Address</h5>
                    <p>Send emails to Mailtrap from your CRM or sending service (Sendgrid, Gmail, etc.) without
                        additional integration. Simulate sending to multiple recipients with "+" email alias (i.e
                        94fbe5eb96-31cba2+1@inbox.mailtrap.io).</p>
                        <br>
                    <div id="email-direction" class="inbox-boxProp">
                        <p>Imitate sending to unique recipients.</p>
                        <p>Route emails from the third-party sending tools to Mailtrap.</p>
                        <p>Perform email app load testing and inspect behavior of each of your email servers using
                            different testing email addresses and inboxes.</p>
                        <div style="display: flex; gap:1%">
                            <button>Upgrade</button>
                            <p class="inbox-body-bluetext">Check how it works</p>
                        </div>
                        <p>This feature is available on <b>Bussiness</b>,<b>Premium</b>, or <b>Enterprise</b> plans.
                        </p>
                    </div>
                </div>
                <div style="display: none;">
                    <h5>Auto Forwarding Rules</h5>
                    <p>Emails sent to the allowed addresses and/or domains will be forwarded to real recipients.</p>
                    <br>
                    <div id="email-direction" class="inbox-boxProp">
                        <p>Allow sending test emails to whitelisted real recipients.</p>
                        <p>Automatically receive test emails in real inboxes to preview them in different email
                            clients.</p>
                        <div style="display: flex; gap:1%">
                            <button>Upgrade</button>
                            <p class="inbox-body-bluetext">Check how it works</p>
                        </div>
                        <p>This feature is available on <b>Bussiness</b>,<b>Premium</b>, or <b>Enterprise</b> plans.
                        </p>
                    </div>
                </div>
                <div style="display: none;">
                    <h5>Manual Forwarding Rules</h5>
                    <p>You can send emails to real whitelisted recipients for testing purposes.<br>
                        Open the email you wish to forward and click the "Forward email" icon in the message menu.
                    </p>
                    <br>
                    <div id="email-direction" class="inbox-boxProp">
                        <p>Forward any email to the real email address of your choice.</p>
                        <p>Quickly share a test email with your colleagues or clients.</p>
                        <div style="display: flex; gap:1%">
                            <button>Upgrade</button>
                            <p class="inbox-body-bluetext">Check how it works</p>
                        </div>
                        <p>This feature is available on <b>Bussiness</b>,<b>Premium</b>, or <b>Enterprise</b> plans.
                        </p>
                    </div>
                </div>
                <div style="display: none;">
                    <h5>Inbox Team Members</h5>
                    <p>Share access to this inbox with anyone. If they don't have a Mailtrap account yet, they will
                        be asked to create a free account.</p>
                    <div id="email-direction" class="inbox-boxProp">
                        <p>Manage access to each of your inboxes for colleagues and clients.</p>
                        <p>Easily share test emails with your team.</p>
                        <div style="display: flex; gap:1%">
                            <button>Upgrade</button>
                            <p class="inbox-body-bluetext">Check how it works</p>
                        </div>
                        <p>This feature is available on <b>Bussiness</b>,<b>Premium</b>, or <b>Enterprise</b> plans.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})

export default inbox_component;