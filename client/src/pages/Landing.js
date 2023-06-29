import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Freegan ascot craft beer af you probably haven't heard of them DSA
            salvia cred hashtag meh artisan organic cray master cleanse.
            Coloring book venmo 8-bit irony man braid mixtape vexillologist
            biodiesel bespoke godard.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        {/* img */}
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}
export default Landing
