import gitHubIcon from './../btnGitHub/gitHub-black.svg'
import './../btnGitHub/style.css'


const BtnGitHub = ({ link }) => {
    return (<a href={link} target='_blank' rel='noreferrer' className="btn-outline">
        <img src={gitHubIcon} alt="" />
        GitHub repo
    </a>);
}
 
export default BtnGitHub;