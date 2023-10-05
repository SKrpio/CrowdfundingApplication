import "../pages/CSS/LoginPage.css";
import LoginForm from "../components/LoginForm";
import leftWing from '../images/leftWing.png';
import rightWing from '../images/rightWing.png';



function LoginPage() {
    return (
        <div>
            <img src={leftWing} className="wing left-wing" />
            <img src={rightWing} className="wing right-wing"/>
            <div className="login-container"> 
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;
