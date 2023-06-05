import { useRef, useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import './styles/Contact.css';
import { ImInstagram, ImLinkedin, ImTwitter, ImGithub } from 'react-icons/im';

interface ContactProps {
	skills: string[];
}

interface FormData {
	name: string;
	email: string;
	message: string;
	mailing_list: boolean;
}

const supabase: SupabaseClient = createClient(
	'https://qfwmrzebhjznjjsdsvfh.supabase.co',
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Contact({ skills }: ContactProps) {
	const traits: string[] = [
		'Contact Me!',
		"Let's get in touch!",
		"Let's chat!",
		'Hit me up!',
		'Contact Me!',
		"Let's get in touch!",
		"Let's chat!",
		'Hit me up!',
		'Contact Me!',
		"Let's get in touch!",
		"Let's chat!",
		'Hit me up!',
	];

	const defaultFormData: FormData = {
		name: '',
		email: '',
		message: '',
		mailing_list: false,
	};
	const [formData, setFormData] = useState(defaultFormData);
	const [submitStatus, setSubmitStatus] = useState<string | null>(null);

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
		checked: boolean | null
	) => {
		let clone;
		//if checked is not null, assume that its the checkbox element
		if (checked !== null) {
			clone = {
				...formData,
				mailing_list: checked,
			};
		} else {
			clone = {
				...formData,
				[e.target.name as keyof FormData]: e.target.value,
			};
		}
		setFormData(clone);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error } = await supabase.from('Messages').insert(formData);

		let emailInput = document.getElementById('email') as HTMLInputElement;
		if (error === null) {
			setSubmitStatus('SUCCESS!');
			setFormData(defaultFormData);
			emailInput.style.boxShadow = '0.25rem 0.25rem 0 0 var(--secondary-color)';
			localStorage.setItem('name', formData.name);
		} else {
			setSubmitStatus('INVALID EMAIL');
			emailInput.style.boxShadow = '0.25rem 0.25rem 0 0 var(--error-color)';
		}
	};

	return (
		<div className='carousel-container' id='contact'>
			<div className='skill-marquee top'>
				<ul className='marquee-content'>
					{traits.map((traits, i) => (
						<li key={`trait ${i}`}>
							<h3>{traits.toUpperCase()}</h3>
						</li>
					))}
				</ul>
				<ul className='marquee-content' aria-hidden='true'>
					{traits.map((traits, i) => (
						<li key={`trait ${i + 10})}`}>
							<h3>{traits.toUpperCase()}</h3>
						</li>
					))}
				</ul>
			</div>
			<div className='content'>
				<form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
					<label>
						NAME
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							placeholder='My name is...'
							onChange={(e) => handleChange(e, null)}
						/>
					</label>
					<hr />
					<label>
						E-MAIL
						<input
							type='text'
							id='email'
							name='email'
							value={formData.email}
							placeholder='user@example.com'
							onChange={(e) => handleChange(e, null)}
						/>
					</label>
					<hr />
					<label>
						MESSAGE
						<textarea
							id='body'
							name='message'
							value={formData.message}
							placeholder="'You're so cool, please work for me!!' - or something like that"
							onChange={(e) => handleChange(e, null)}
						/>
					</label>
					<hr />
					<label>
						{'would you like to join my mailing list?'}
						<input
							id='checkbox'
							type='checkbox'
							onChange={(e) => handleChange(e, e.target.checked)}
						></input>
					</label>
					<button type='submit' id='submit'>
						{submitStatus === null ? 'SUBMIT' : submitStatus}
					</button>
				</form>
				<div className='socials'>
					<a href='https://github.com/batmanonwheels'>
						<ImGithub />
					</a>
					<a href='https://www.linkedin.com/in/devinjgarcia/'>
						<ImLinkedin />
					</a>
					<a href='http://twitter.com/dvnjgrc'>
						<ImTwitter />
					</a>
					<a href='https://www.instagram.com/tellem2bringoutthewholeocean/'>
						<ImInstagram />
					</a>
				</div>
			</div>
			<div className='skill-marquee bottom'>
				<ul className='marquee-content'>
					{skills.map((tech, i) => (
						<li key={`tech ${i}`}>
							<i
								title={tech.toUpperCase()}
								className={`devicon-${tech}-plain`}
							></i>
						</li>
					))}
				</ul>
				<ul className='marquee-content' aria-hidden='true'>
					{skills.map((tech, i) => (
						<li key={`tech ${i + 12}`}>
							<i
								title={tech.toUpperCase()}
								className={`devicon-${tech}-plain`}
							></i>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
