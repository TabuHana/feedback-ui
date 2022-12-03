import Card from "../components/shared/Card"
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave reviews about a product.</p>
        <p>Built to learn React</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}
export default AboutPage