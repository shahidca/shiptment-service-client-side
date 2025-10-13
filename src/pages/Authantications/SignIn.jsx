
import { Link, useNavigate } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const SignIn = () => {
    const navigae = useNavigate()
    const { googleSignIn,signInUser } = UseAuth()
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       signInUser(email, password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>{
        console.log(error.message)
       }) 

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigae('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className=" flex-col lg:flex-row-reverse">
                <div className=" bg-base-100 w-full shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <h3 className='text-xl font-bold text-center py-4'>Sign In</h3>
                                {/* email validation */}
                                <label className="input validator ">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </g>
                                    </svg>
                                    <input type="email" name='email' placeholder="mail@site.com" required />
                                </label>
                                <div className="validator-hint hidden">Enter valid email address</div>
                                {/* password validation */}
                                <label className="input validator">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                            ></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="password"
                                        name='password'
                                        required
                                        placeholder="Password"
                                        minlength="8"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                    />
                                </label>
                               
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4 bg-[#CAEB66] text-black">Login</button>
                                <p>Don’t have any account? <Link className="text-[#CAEB66] font-bold ml-2" to={'/sign-up'}>Register</Link></p>
                                <div className="divider">OR</div>

                            </fieldset>
                        </form>
                        {/* Google */}
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;