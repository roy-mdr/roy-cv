<script lang="ts">
	import "external-svg-loader";

	import pPic from '../assets/pp_bw.jpg';
	import vwStatue from '../assets/helios.jpg';
	import brEntity from '../assets/entity.jpg';
	import imgVapor from '../assets/vapor.jpg';
	import imgBackroom from '../assets/backroom.jpg';

	import HeaderSelector from "./HeaderSelector.svelte";
	import PrevProjBtn from './PrevProjBtn.svelte';
	import Skill from './Skill.svelte';

	import { appTheme, appLang, showProfPic, highlightProj, hideProj } from '../stores/appState.js';
	import { prevProj } from '../stores/previewing.js';

	/* IMAGES */
	import svgUAA from '../assets/icons/uaa.svg';
	import svgETSAG from '../assets/icons/etsag.svg';
	import svgLandelof from '../assets/icons/landelof.svg';
	import svgPopmusic from '../assets/icons/popmusic.svg';
	import svgMasterclass from '../assets/icons/masterclass.svg';
	import svgDomestika from '../assets/icons/domestika.svg';
	import svgPlatzi from '../assets/icons/platzi.svg';

	const content = {
		es: {
			altCoverPic: "Foto de portada",
			altProfilePic: "Foto de perfil",
			profPicToggMsg: "Click aquí para alternar la foto de perfil",
			h2Presentation: "Presentación",
			presentationP_1: "Arquitecto, web dev y amante de la música. De Aguascalientes, México.",
			presentationP_2: "Me apasiona encontrar puntos de fusión entre mis intereses y desarrollar proyectos creativos que desafíen el estado de lo tradicional, buscando la incorporación y creación de tecnologías sin extraviar la sensibilidad.",
			downloadCV: "Descargar CV:",
			profileArq: "Perifl Arquitecto",
			profileDev: "Perifl Desarrollador",
			profileAudio: "Perifl Productor de Audio",
			h3WhatsNext: "A futuro...",
			wNext_1: "Desarrollo de la etapa de seguimiento (post-entrega) de obra arquitectónica y reintegración al proceso de diseño.",
			wNext_2: "Desarrollo de herramientas para el método de diseño arquitectónico y urbano.",
			wNext_3: "Innovación en tecnologías de Internet of Things, análisis de datos e inteligencia artificial.",
			wNext_4: "Desarrollo de proyectos espaciales, audiovisuales y sensoriales.",
			h2Lang: "Idiomas",
			langEs: "Español (nativo)",
			langEn: "Inglés",
			langDe: "Alemán",
			h2Edu: "Educación",
			edu_1: "Grado de Arquitectura en la Universidad Autónoma de Aguascalientes (2016-2021) promedio 9.6/10",
			edu_2: "Estudios en la Escuela Técnica Superior de Arquitectura de la Universidad de Granada en Granada, España. (2019)", // >>>>> con un par de materias sobresaliente ?? <<<<<<
			h3Achiv: "Logros",
			achiv_1: "Equipo ganador del 1er lugar nacional del Concurso Infonavit 2020",
			achiv_2: "Desempeño sobresaliente en examen nacional de egreso arquitectura EGEL 2021",
			achiv_3: "Mención honorífica por desempeño académico en la Universidad Autónoma de Aguascalientes",
			h3ExtraCourse: "Cursos extracurriculares",
			xCourse_1: "Post-producción de audio y video certificación Adobe en Master Class Ags (2012)",
			xCourse_2: "Curso de producción, mezcla y master musical en Pop Music Ags (2015)",
			xCourse_3: "Landelof Ceramics",
			xCourse_4: "Blender, Grasshopper y diseño de iluminación en Domestika.com",
			xCourse_5: "SQL, APIs y UX/UI en Platzi.com",
			h2Exp: "Experiencia",
			h3ESustenta: "Estudio Sustenta Arq. (desde 2016)",
			eSus_1: "Residente de obra",
			eSus_2: "Levantamientos topográficos (dron + fotogrametría + estación total)",
			eSus_3: "Proyectista y dibujante",
			eSus_4: "Modelado 3D, render y realidad virtual",
			eSus_5: "Desarrollador de sistemas (software / web)",
			eSus_6: "Administración de equipo (PC / servidor propio / NAS)",
			eSus_7: "Administrador de red (Routers, DHCP, DNS, Puertos, etc.)",
			eSus_8: "Administración de proxys y reverse-proxys",
			eSus_9: "Administración de paquetes y Docker",
			h3Pozas: "Pozas Arq. (Mty 2018)",
			pz_1: "Diseño ejecutivo de mobiliario residencial",
			h3UAA: "Universidad Autónoma de Aguascalientes",
			uaa_1: "Capacitación de visualización arquitectónica en realidad virtual",
			uaa_2: "Profesor asistente en Diseño Arquitectónico II (2021)",
			uaa_3: "Profesor asistente en Metodología del Diseño II (2022)",
			uaa_4: "Participante en proyecto de renovación del método de diseño arquitectónico de la UAA",
			projects: "Proyectos",
			architecture: "Arquitectura",
			audioviz: "Audiovisuales",
			skills: "Habilidades",
			tech: "Tecnologías",
			lang: "Lenguajes",
			reference: "Referencias",
			contact: "Contacto",
			contact_txt: "Puedes enviarme un correo a <a href=\"mailto://roy.mdr.mx@gmail.com\" target=\"_blank\">roy.mdr.mx@gmail.com</a> o dejar tu mensaje en la caja:",
			send: "ENVIAR",
		},

		en: {
			altCoverPic: "Cover pic",
			altProfilePic: "Profile pic",
			profPicToggMsg: "Click here to toggle the profile picture",
			h2Presentation: "Presentation",
			presentationP_1: "Architect, web developer and music lover from Aguascalientes, Mexico.",
			presentationP_2: "I find passionate looking for common areas between my interests and developing creative projects that challenge the state of the traditional, seeking the incorporation and creation of technologies without losing the aspect of sensitivity.",
			downloadCV: "Download CV:",
			profileArq: "Architect profile",
			profileDev: "Soft. Developer profile",
			profileAudio: "Audio Producer profile",
			h3WhatsNext: "Looking forward...",
			wNext_1: "Development of the post-delivery stage of building construction and reintegration into the design process.",
			wNext_2: "Development of tools for the urban and architectural design process.",
			wNext_3: "Innovation of technologies of Internet of Things, data analysis and IA.",
			wNext_4: "Development of spatial, audiovisual and sensorial projects.",
			h2Lang: "Languages",
			langEs: "Spanish (native)",
			langEn: "English",
			langDe: "German",
			h2Edu: "Education",
			edu_1: "Architecture degree at the Autonomous University of Aguascalientes (UAA 2016-2021) grade 9.6/10",
			edu_2: "Studies at the Higher Technical School of Architecture of the University of Granada in Granada, Spain. (2019)", // with a couple of outstanding subjects ??
			h3Achiv: "Achievements",
			achiv_1: "1st national place winning-team of Infonavit Contest 2020",
			achiv_2: "Outstanding grade performance in the national architecture graduation exam EGEL 2021",
			achiv_3: "Honorable mention for academic performance at the Autonomous University of Aguascalientes (UAA 2021)",
			h3ExtraCourse: "Extracurricular Courses",
			xCourse_1: "Audio and video post-production training (Adobe certification) at Master Class Ags (2012)",
			xCourse_2: "Music production, mix and master bootcamp at Pop Music Ags (2015)",
			xCourse_3: "Landelof Ceramics",
			xCourse_4: "Blender, Grasshopper and architectural light design at Domestika.com",
			xCourse_5: "SQL, APIs and UX/UI at Platzi.com",
			h2Exp: "Experience",
			h3ESustenta: "Estudio Sustenta (Arq. Firm) (since 2016)",
			eSus_1: "On-Site Building Project Manager",
			eSus_2: "Site survey (drone + photogrammetry + total station)",
			eSus_3: "Designer and draftsman",
			eSus_4: "3D modeling, rendering and VR",
			eSus_5: "Systems developer (software / web)",
			eSus_6: "Hardware administrator (PC / servers / NAS)",
			eSus_7: "Network administrator (Routers, DHCP, DNS, Puertos, etc.)",
			eSus_8: "Proxy/Reverse-proxy administrator",
			eSus_9: "Docker setup and package mantainement",
			h3Pozas: "Pozas Architects (2018)",
			pz_1: "Custom residential furniture design",
			h3UAA: "Autonomous University of Aguascalientes",
			uaa_1: "VR Architectural Visualization Training",
			uaa_2: "Assistant Professor in Architectural Design II (2021)",
			uaa_3: "Assistant Professor in Design Methodology II (2022)",
			uaa_4: "Participant of the project of renewal of the design methodology for architecture at UAA",
			projects: "Projects",
			architecture: "Architecture",
			audioviz: "Audiovisual",
			skills: "Skills",
			tech: "Technologies",
			lang: "Lenguages",
			reference: "Reference",
			contact: "Contact",
			contact_txt: "You can send me an email to <a href=\"mailto://roy.mdr.mx@gmail.com\" target=\"_blank\">roy.mdr.mx@gmail.com</a> or leave your message in the box:",
			send: "SEND",
		},

		de: {
			altCoverPic: "",
			altProfilePic: "",
			profPicToggMsg: "",
			h2Presentation: "",
			presentationP_1: "",
			presentationP_2: "",
			downloadCV: "",
			profileArq: "",
			profileDev: "",
			profileAudio: "",
			h3WhatsNext: "",
			wNext_1: "",
			wNext_2: "",
			wNext_3: "",
			wNext_4: "",
			h2Lang: "",
			langEs: "",
			langEn: "",
			langDe: "",
			h2Edu: "",
			edu_1: "",
			edu_2: "",
			h3Achiv: "",
			achiv_1: "",
			achiv_2: "",
			achiv_3: "",
			h3ExtraCourse: "",
			xCourse_1: "",
			xCourse_2: "",
			xCourse_3: "",
			xCourse_4: "",
			xCourse_5: "",
			h2Exp: "",
			h3ESustenta: "",
			eSus_1: "",
			eSus_2: "",
			eSus_3: "",
			eSus_4: "",
			eSus_5: "",
			eSus_6: "",
			eSus_7: "",
			eSus_8: "",
			eSus_9: "",
			h3Pozas: "",
			pz_1: "",
			h3UAA: "",
			uaa_1: "",
			uaa_2: "",
			uaa_3: "",
			uaa_4: "",
			projects: "",
			architecture: "",
			shWare: "",
			audioviz: "",
			skills: "",
			tech: "",
			lang: "",
			reference: "",
			contact: "",
			contact_txt: "",
			send: "",
		},
	}

	const projectData = {
		arch: [
			// {
			// 	projId: "CAD-drawing",
			// 	is_misc: true,
			// 	title: {
			// 		es: "Dibujo CAD",
			// 		en: "2D CAD drawing",
			// 		de: ""
			// 	}
			// },
			// {
			// 	projId: "hand-drawing",
			// 	is_misc: true,
			// 	title: {
			// 		es: "Dibujo a mano",
			// 		en: "Hand drawing",
			// 		de: ""
			// 	}
			// },
			{
				projId: "modeling-rendering",
				is_misc: true,
				title: {
					es: "Modelado y renderizado",
					en: "Modeling & rendering",
					de: ""
				}
			},
			{
				projId: "parametric-design",
				is_misc: true,
				title: {
					es: "Diseño paramétrico y herramientas",
					en: "Parametric design & tooling",
					de: ""
				}
			},
			{
				projId: "topographic",
				is_misc: true,
				title: {
					es: "Levantamiento topográfico + sitio",
					en: "Topographic + site survey",
					de: ""
				}
			},
			{
				projId: "sun-study",
				is_misc: true,
				title: {
					es: "Estudio solar y soluciones",
					en: "Sun study & solutions",
					de: ""
				}
			},
			// {
			// 	projId: "virtual-reality",
			// 	is_misc: true,
			// 	title: {
			// 		es: "Realidad virtual",
			// 		en: "VR Viz",
			// 		de: ""
			// 	}
			// },
			{
				projId: "castell",
				is_misc: false,
				title: {
					es: "",
					en: "Castell de Ferro",
					de: ""
				}
			},
			{
				projId: "conjunto-mi",
				is_misc: false,
				title: {
					es: "",
					en: "Conjunto M.I.",
					de: ""
				}
			},
			{
				projId: "hornedo",
				is_misc: false,
				title: {
					es: "",
					en: "Remod. Hornedo",
					de: ""
				}
			},
			{
				projId: "black-box",
				is_misc: false,
				title: {
					es: "",
					en: "The Black Box",
					de: ""
				}
			},
			{
				projId: "cenco-pv",
				is_misc: false,
				title: {
					es: "Centro Comunitario P.V.",
					en: "Community Centre P.V.",
					de: ""
				}
			},
			{
				projId: "infonavit-proj",
				is_misc: false,
				title: {
					es: "Concurso INFONAVIT 2020",
					en: "INFONAVIT Contest 2020",
					de: ""
				}
			},
			{
				projId: "es-amehos1",
				is_misc: false,
				title: {
					es: "",
					en: "AMEHOS I",
					de: ""
				}
			},
			{
				projId: "es-amehos2",
				is_misc: false,
				title: {
					es: "",
					en: "AMEHOS II",
					de: ""
				}
			},
		],
		tech: [
			// {
			// 	projId: "2521",
			// 	is_misc: false,
			// 	title: {
			// 		es: "",
			// 		en: "Website 2521",
			// 		de: ""
			// 	}
			// },
			{
				projId: "vigilost",
				is_misc: false,
				title: {
					es: "",
					en: "VigiLost",
					de: ""
				}
			},
			// {
			// 	projId: "bloom",
			// 	is_misc: false,
			// 	title: {
			// 		es: "",
			// 		en: "Bloom Portfolio",
			// 		de: ""
			// 	}
			// },
			{
				projId: "splash-creator",
				is_misc: false,
				title: {
					es: "",
					en: "Splash Creator",
					de: ""
				}
			},
			{
				projId: "lshdrms",
				is_misc: false,
				title: {
					es: "",
					en: "LSHD//DRMS + Chrome Extension",
					de: ""
				}
			},
			{
				projId: "es-web",
				is_misc: false,
				title: {
					es: "",
					en: "Webapp + Website Estudio Sustenta",
					de: ""
				}
			},
			// {
			// 	projId: "vr-ctrl",
			// 	is_misc: false,
			// 	title: {
			// 		es: "",
			// 		en: "VR Controller",
			// 		de: ""
			// 	}
			// },
			{
				projId: "iot",
				is_misc: false,
				title: {
					es: "",
					en: "IoT firmware",
					de: ""
				}
			},
			{
				projId: "no-poll",
				is_misc: false,
				title: {
					es: "",
					en: "Pub-sub broker + Control API",
					de: ""
				}
			},
			{
				projId: "es-pcwin",
				is_misc: false,
				title: {
					es: "",
					en: "Remote Access Tool + Protocol Handler",
					de: ""
				}
			},
			{
				projId: "es-proj-viz",
				is_misc: false,
				title: {
					es: "",
					en: "Project Mapper",
					de: ""
				}
			},
			{
				projId: "app-gtd",
				is_misc: false,
				title: {
					es: "",
					en: "App Getting Things Done",
					de: ""
				}
			},
			{
				projId: "landa",
				is_misc: false,
				title: {
					es: "",
					en: "LANDA",
					de: ""
				}
			},
			{
				projId: "lade",
				is_misc: false,
				title: {
					es: "CIDE: Los Archivos del Ejercito",
					en: "CIDE: The Army Files",
					de: ""
				}
			},
		],
		auviz: [
			{
				projId: "experimental-graphics",
				is_misc: true,
				title: {
					es: "Gráficos experimentales",
					en: "Experimental graphics",
					de: ""
				}
			},
			{
				projId: "bluish",
				is_misc: false,
				title: {
					es: "",
					en: "Bluish",
					de: ""
				}
			},
			{
				projId: "dovele",
				is_misc: false,
				title: {
					es: "",
					en: "Dovele",
					de: ""
				}
			},
			{
				projId: "palmasur",
				is_misc: false,
				title: {
					es: "",
					en: "Collab: Palmasur",
					de: ""
				}
			},
			{
				projId: "dosis-sonora",
				is_misc: false,
				title: {
					es: "",
					en: "Dosis Sonora",
					de: ""
				}
			},
			{
				projId: "antidoto",
				is_misc: false,
				title: {
					es: "",
					en: "Podcast Antídoto",
					de: ""
				}
			},
			{
				projId: "pangea",
				is_misc: false,
				title: {
					es: "",
					en: "PANGEA Mapamundi",
					de: ""
				}
			},
			{
				projId: "ghost-show",
				is_misc: false,
				title: {
					es: "",
					en: "Ghost Show",
					de: ""
				}
			},
		]
	};

	let contactEmail = "";
	let contactMessage = "";
	let contactError = false;
	let contactOutput = "";

	function submitMessage() {

		if ( !validateEmail(contactEmail) ) {
			contactError  = true;
			contactOutput = "Invalid email";
			return;
		}

		if ( contactMessage.replace(/\s|\t|\n|\r|\0|\x0B/g, '') == "" ) {
			contactError  = true;
			contactOutput = "Message can't be empty!";
			return;
		}

		fetch("/post_message.php", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: contactEmail,
				msg: contactMessage
			})
		})
		.then((res) => {
			if (!res.ok) throw new Error("It seems that the service is not working at the moment :/");

			console.log(res)
			contactEmail = "";
			contactMessage = "";
			contactOutput = "Message sent successfully!";
			contactError = false;
			setTimeout( () => {
				contactOutput = "";
			}, 3000 );
		})
		.catch( (err) => {
			contactError = true;
			contactOutput = "There was an error posting the message";
			console.log("There was an error posting the message");
			console.log(err);
		})
	}

	function validateEmail(mail) {
		if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ) return true

		return false
	}

	function setPrevProj(ev) {
		const projId = ev.target.attributes["proj-id"].nodeValue;

		// Handle go-back navigation to close Project Panel
		window.location.hash = projId;
	}
</script>



<main>
	<section id="presentation" style="padding-top: 0;">
		{#if $appTheme == 'vapor'}
		<img src={imgVapor} alt={content[$appLang].altCoverPic || content['en'].altCoverPic} style="width: 100%; display: block;">
		{:else if $appTheme == 'backrooms'}
		<img src={imgBackroom} alt={content[$appLang].altCoverPic || content['en'].altCoverPic} style="width: 100%; display: block;">
		{:else}
		<HeaderSelector></HeaderSelector>
		{/if}
		<div id="my-name">
			<!-- <img src={pPic} alt="Foto de perfil" width="100px" height="100px"> -->
			{#if $appTheme == 'vapor'}
			<h1>リサフランク420 / 現代のコンピュー</h1>
			{:else if $appTheme == 'backrooms'}
			<h1>Ȟ̷̬̻̤̼͔̖̼̮̯̮͖̟̳͒̀̎͆͂̍̂͊͝Ẻ̸̛͍̑̏̊̿͌̍̈́͌̀̾̚͝͝L̷̛̘̰̫̱̲̝͖̦̜͚͓̾͛̑̔́̊̆́͆͂̚L̶̟̲͖̣̣͛̇̀͋͆͑̎Õ̷̺̬̬̖̻̫̀͌̌͗̀̉́̃͐͗́̋̑̕͜?̸͙̥̽̏̈́̽͋́͋̄̈̆̕͠͝ ̶̖̭̟̮̠̝̯̝͙̘̳̽͂̂̌̑̐̐̏̇͗̀̎͒̚͠C̶̢͙̜̮̠̤̰̟̯̞̹͉̹̾͒̓̇̄̇͛̆̐͘̚͘͝A̷̢̞̪̩͙̗̯̹̅͆̈́̊̀̓́̂̿̃͒̑̑͘̕N̴̢͇͕̗̫͚͕̺̙̗̮̳̉̈̏̑͌ͅ ̴̛̛̲͚̬̃͛̀̄͊̔̈̕̕͘͝A̸̺̙̱̦̲̜̣̱͋̔̒͝͝Ǹ̷̛̺̹̲͉̀̈́͗̐̆̈̅̓̄̚͝͠Ÿ̸̛̞̭̱̗͙̫̭̘̙̺̗͎͍́͂̓͊̚͝͠B̷̢̲̼̗̣̼̩̤̠̭̓̉̄̀͐̌̕O̶̫̺̺͈̺̻͋̒̍̋̑͛̾̇͗̐̃̇͝͝D̷͎̜̮͐̈́̔̚͝Y̶̨̛̰̺͓̱̱̳͇̙̱̊͋̔͂̓̿͛͘̚ ̸̤͇̞̩̦̻̿͛͑̽̇͌̾̃̀͜͠H̷͈̫̪̥͑͂̐̈́̊̈́̍͛̇͂̎͗̔͝͝E̷̳̱͚͒̿̑̏͌̏͗̇̑̋̈́̈͂͠A̸̰͈̘̓̐͋̕̚ͅR̶̫̂̎͊̅͛̋̊̿̆́̃͘̕͠͠ͅ ̸̢̛̳̙̙̟̝̘̪̘̤̺̠̼̼͂̂͠U̸̡̧̘̭̭̝͎̣͕͓̗̩̿̈̋͂̃̄͆͋̋̈̎̚͜͝͠Ș̶̨̨̳̰̝̗̝̭̲̾̍͆̉?̸̙̲̈́͗͆̈́̈́̍̐́̈́</h1>
			{:else}
			<h1>Rodrigo <wbr>Martínez <wbr>Del Río</h1>
			{/if}
		</div>

		<div class="pad light">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="p-pic noselect" on:click={ () => { $showProfPic = !$showProfPic; } }>
				{#if $showProfPic}
					{#if $appTheme == 'vapor'}
					<img src={vwStatue} alt={content[$appLang].altProfilePic || content['en'].altProfilePic} width="100%" height="100%">
					{:else if $appTheme == 'backrooms'}
					<img src={brEntity} alt={content[$appLang].altProfilePic || content['en'].altProfilePic} width="100%" height="100%">
					{:else}
					<img src={pPic} alt={content[$appLang].altProfilePic || content['en'].altProfilePic} width="100%" height="100%">
					{/if}
				{:else}
					<span><small>{content[$appLang].profPicToggMsg || content['en'].profPicToggMsg}</small></span>
				{/if}
			</div>
			<h2>{content[$appLang].h2Presentation || content['en'].h2Presentation}</h2>
			<i>
				<p class="shrink-for-ppic">{content[$appLang].presentationP_1 || content['en'].presentationP_1}</p>
				<p>{content[$appLang].presentationP_2 || content['en'].presentationP_2}</p>
			</i>
			<div class="stack-on-small" style="display: flex; justify-content: center;">
				<a href="/download/Martinez_Del_Rio_Rodrigo-cv_arq.pdf" target="_blank" class="btn cta"><b>{content[$appLang].downloadCV || content['en'].downloadCV}</b> {content[$appLang].profileArq || content['en'].profileArq}</a>
				<a href="/download/Martinez_Del_Rio_Rodrigo-cv_dev.pdf" target="_blank" class="btn cta"><b>{content[$appLang].downloadCV || content['en'].downloadCV}</b> {content[$appLang].profileDev || content['en'].profileDev}</a>
				<a href="/download/Martinez_Del_Rio_Rodrigo-cv_aud.pdf" target="_blank" class="btn cta"><b>{content[$appLang].downloadCV || content['en'].downloadCV}</b> {content[$appLang].profileAudio || content['en'].profileAudio}</a>
			</div>
		</div>

		<h3>{content[$appLang].h3WhatsNext || content['en'].h3WhatsNext}</h3>
		<ul>
			<li>{content[$appLang].wNext_1 || content['en'].wNext_1}</li>
			<li>{content[$appLang].wNext_2 || content['en'].wNext_2}</li>
			<li>{content[$appLang].wNext_3 || content['en'].wNext_3}</li>
			<li>{content[$appLang].wNext_4 || content['en'].wNext_4}</li>
		</ul>

		<!-- <div>
			<button>Ver todo</button>
			<button>Filtrar: Perifl Arquitecto</button>
			<button>Filtrar: Perifl Desarrollador</button>
			<button>Filtrar: Perifl Productor de Audio</button>
		</div> -->

	</section>

	<section id="education">
		<h2>{content[$appLang].h2Edu || content['en'].h2Edu}</h2>
		<div style="display: flex;">
			<div class="logo-text">
				<svg data-src={svgUAA} width="4em" height="4em" color={"#"}></svg>
				<span>{content[$appLang].edu_1 || content['en'].edu_1}</span>
			</div>
			<div class="logo-text">
				<svg data-src={svgETSAG} width="4em" height="4em" color={"#"}></svg>
				<span>{content[$appLang].edu_2 || content['en'].edu_2}</span>
			</div>
		</div>

		<div class="pad light">
			<h3>{content[$appLang].h3Achiv || content['en'].h3Achiv}</h3>
			<ul>
				<li>
					<!-- <PrevProjBtn open="infonavit2021" /> -->
					{content[$appLang].achiv_1 || content['en'].achiv_1}
				</li>
				<li>
					<!-- <PrevProjBtn open="infonavit2021" /> -->
					{content[$appLang].achiv_2 || content['en'].achiv_2}
				</li>
				<li>
					<!-- <PrevProjBtn open="infonavit2021" /> -->
					{content[$appLang].achiv_3 || content['en'].achiv_3}
				</li>
			</ul>
		</div>

		<h3>{content[$appLang].h3ExtraCourse || content['en'].h3ExtraCourse}</h3>
		<div style="display: flex; font-size:small;">
			<div class="logo-text">
				<svg data-src={svgMasterclass} width="4em" height="4em" color={"#"}></svg>
				<span>{content[$appLang].xCourse_1 || content['en'].xCourse_1}</span>
			</div>
			<div class="logo-text">
				<svg data-src={svgPopmusic} width="4em" height="4em" color={"#"}></svg>
				<span>{content[$appLang].xCourse_2 || content['en'].xCourse_2}</span>
			</div>
			<div class="logo-text">
				<svg data-src={svgLandelof} width="4em" height="4em" color={"#"}></svg>
				<span>{content[$appLang].xCourse_3 || content['en'].xCourse_3}</span>
			</div>
		</div>
		<div style="display: flex; font-size:small;">
			<div style="flex: 0.5;"></div>
			<div class="logo-text">
				<svg data-src={svgDomestika} width="4em" height="4em" color={"#"}></svg>
				<span>{content[$appLang].xCourse_4 || content['en'].xCourse_4}</span>
			</div>
			<div class="logo-text">
				<svg data-src={svgPlatzi} width="4em" height="4em" color={"#"}></svg>
				<span>{content[$appLang].xCourse_5 || content['en'].xCourse_5}</span>
			</div>
			<div style="flex: 0.5;"></div>
		</div>

	</section>

	<section id="languages">
		<h2>{content[$appLang].h2Lang || content['en'].h2Lang}</h2>
		<div class="stack-on-small" style="display: flex;">
			<div class="lang">
				<span>{content[$appLang].langEs || content['en'].langEs}</span>
				<div class="level" style="max-width: 100%;"></div>
			</div>
			<div class="lang">
				<span>{content[$appLang].langEn || content['en'].langEn}</span>
				<div class="level" style="max-width: 80%;"></div>
			</div>
			<div class="lang">
				<span>{content[$appLang].langDe || content['en'].langDe}</span>
				<div class="level" style="max-width: 5%;"></div>
			</div>
		</div>
	</section>

	<section id="experience">
		<h2>{content[$appLang].h2Exp || content['en'].h2Exp}</h2>

		<h3>{content[$appLang].h3ESustenta || content['en'].h3ESustenta}</h3>
		<ul>
			<li>{content[$appLang].eSus_1 || content['en'].eSus_1}</li>
			<li>{content[$appLang].eSus_2 || content['en'].eSus_2}</li>
			<li>{content[$appLang].eSus_3 || content['en'].eSus_3}</li>
			<li>{content[$appLang].eSus_4 || content['en'].eSus_4}</li>
			<li>{content[$appLang].eSus_5 || content['en'].eSus_5}</li>
			<li>{content[$appLang].eSus_6 || content['en'].eSus_6}</li>
			<ul>
				<li>{content[$appLang].eSus_7 || content['en'].eSus_7}</li>
				<li>{content[$appLang].eSus_8 || content['en'].eSus_8}</li>
				<li>{content[$appLang].eSus_9 || content['en'].eSus_9}</li>
			</ul>
		</ul>

		<h3>{content[$appLang].h3Pozas || content['en'].h3Pozas}</h3>
		<ul>
			<li>{content[$appLang].pz_1 || content['en'].pz_1}</li>
		</ul>

		<h3>{content[$appLang].h3UAA || content['en'].h3UAA}</h3>
		<ul>
			<li>{content[$appLang].uaa_1 || content['en'].uaa_1}</li>
			<li>{content[$appLang].uaa_2 || content['en'].uaa_2}</li>
			<li>{content[$appLang].uaa_3 || content['en'].uaa_3}</li>
			<li>{content[$appLang].uaa_4 || content['en'].uaa_4}</li>
		</ul>
	</section>

	<section id="projects">
		<h2>{content[$appLang].projects || content['en'].projects}</h2>

		<h3>{content[$appLang].architecture || content['en'].architecture}</h3>
		<div class="proj-container">
			{#each projectData.arch as proj}
				{#if !$hideProj.includes(proj.projId)}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<project
						class="project noselect"
						class:misc={proj.is_misc}
						class:fade={$highlightProj.length > 0 && !$highlightProj.includes(proj.projId)}
						tabindex="0"
						role="button"
						on:click={setPrevProj}
						proj-id={proj.projId}
					>
						{proj.title[$appLang] || proj.title["en"]}
					</project>
				{/if}
			{/each}
		</div>

		<h3>Software / Hardware</h3>
		<div class="proj-container">
			{#each projectData.tech as proj}
				{#if !$hideProj.includes(proj.projId)}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<project
						class="project noselect"
						class:misc={proj.is_misc}
						class:fade={$highlightProj.length > 0 && !$highlightProj.includes(proj.projId)}
						tabindex="0"
						role="button"
						on:click={setPrevProj}
						proj-id={proj.projId}
					>
						{proj.title[$appLang] || proj.title["en"]}
					</project>
				{/if}
			{/each}
		</div>

		<h3>{content[$appLang].audioviz || content['en'].audioviz}</h3>
		<div class="proj-container">
			{#each projectData.auviz as proj}
				{#if !$hideProj.includes(proj.projId)}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<project
						class="project noselect"
						class:misc={proj.is_misc}
						class:fade={$highlightProj.length > 0 && !$highlightProj.includes(proj.projId)}
						tabindex="0"
						role="button"
						on:click={setPrevProj}
						proj-id={proj.projId}
					>
						{proj.title[$appLang] || proj.title["en"]}
					</project>
				{/if}
			{/each}
		</div>
	</section>

	<section id="skills">
		<h2>{content[$appLang].skills || content['en'].skills}</h2>

		<h3>{content[$appLang].architecture || content['en'].architecture}</h3>
		<div class="skillset">
			<Skill level={true} skill="draw" />
			<Skill level={true} skill="word" />
			<Skill level={true} skill="excel" />
			<Skill level={true} skill="powerpoint" />
			<Skill level={true} skill="illustrator" />
			<Skill level={true} skill="photoshop" />
			<Skill level={true} skill="lightroom" />
			<Skill level={true} skill="premiere" />
			<Skill level={true} skill="indesign" />
			<Skill level={true} skill="autocad" />
			<Skill level={true} skill="revit" />
			<Skill level={true} skill="_3dsmax" />
			<Skill level={true} skill="vray" />
			<Skill level={true} skill="sketchup" />
			<Skill level={true} skill="cinema4d" />
			<Skill level={true} skill="lumion" />
			<Skill level={true} skill="twinmotion" />
			<Skill level={true} skill="arcgis" />
			<Skill level={true} skill="metashape" />
			<Skill level={true} skill="_3dzephyr" />
			<Skill level={true} skill="rhinoceros" />
			<Skill level={true} skill="grasshopper" />
			<Skill level={true} skill="ladybug" />
		</div>

		<h3>Software / Hardware</h3>
		<h4>{content[$appLang].tech || content['en'].tech}</h4>
		<div class="skillset">
			<Skill level={true} skill="shell" />
			<Skill level={true} skill="git" />
			<Skill level={true} skill="github" />
			<Skill level={true} skill="docker" />
			<Skill level={true} skill="vscode" />
			<Skill level={true} skill="sublime" />
			<Skill level={true} skill="insomia" />
			<Skill level={true} skill="postman" />
			<Skill level={true} skill="markdown" />
			<Skill level={true} skill="networks" />
			<Skill level={true} skill="apis" />
			<Skill level={true} skill="design" />
		</div>

		<h4>{content[$appLang].lang || content['en'].lang}</h4>
		<div class="skillset">
			<Skill level={true} skill="javascript" />
			<Skill level={true} skill="php" />
			<Skill level={true} skill="cpp" />
			<Skill level={true} skill="python" />
			<Skill level={true} skill="arduino" />
			<Skill level={true} skill="autoit" />
			<Skill level={true} skill="processing" />
			<Skill level={true} skill="java" />
		</div>

		<h4>Front End</h4>
		<div class="skillset">
			<Skill level={true} skill="xd" />
			<Skill level={true} skill="javascript" />
			<Skill level={true} skill="html" />
			<Skill level={true} skill="css" />
			<Skill level={true} skill="vue" />
			<Skill level={true} skill="svelte" />
		</div>
		<h4>Back End</h4>
		<div class="skillset">
			<Skill level={true} skill="php" />
			<Skill level={true} skill="nodejs" />
			<Skill level={true} skill="typescript" />
		</div>
		<h4>Database</h4>
		<div class="skillset">
			<Skill level={true} skill="mariadb" />
			<Skill level={true} skill="mongodb" />
			<Skill level={true} skill="mysql" />
		</div>

		<h3>Audiovisuales</h3>
		<div class="skillset">
			<Skill level={true} skill="premiere" />
			<Skill level={true} skill="audition" />
			<Skill level={true} skill="afterfx" />
			<Skill level={true} skill="touchdesigner" />
			<Skill level={true} skill="abletonlive" />
			<Skill level={true} skill="studioone" />
		</div>
	</section>

	<section id="references">
		<h2>{content[$appLang].reference || content['en'].reference}</h2>
		<ul>
			<li>Gustavo Martínez Velasco (Estudio Sustenta)</li>
		</ul>
	</section>

	<section id="contact" style="min-height: 10em;">
		<div class="pad light">
			<h2>{content[$appLang].contact || content['en'].contact}</h2>
			<span>{@html content[$appLang].contact_txt || content['en'].contact_txt}</span>
			<form on:submit|preventDefault={submitMessage} class="contact-form" class:contact-error={contactError}>
				<input type="email" bind:value={contactEmail} placeholder="your_email@contact.com">
				<textarea bind:value={contactMessage} placeholder="Your message here!"></textarea>
				{#if contactOutput != ""}
				<div>{contactOutput}</div>
				{/if}
				<button type="submit">{content[$appLang].send || content['en'].send}</button>
			</form>
		</div>
	</section>

	<footer>
		<span>roy-mdr @ 2022 | <a href="https://github.com/roy-mdr/roy-cv" target="_blank">View source code</a></span>
	</footer>

</main>



<style>
	main {
		background-color: var(--carpet);
		max-width: 720px;
		padding: 2em;
		margin: 2em 0 2em 0;
		transition: background-color var(--speed-normal);
	}

	main section:not(:first-child) {
		/* color: red; */
		margin-top: 4em;
	}

	footer {
		margin-top: 4em;
		text-align: center;
		font-size: 12px;
	}

	h1 {
		letter-spacing: 0.25em;
		margin-top: 0.5em;
		margin-bottom: 1.5em;
	}

	/*
	#my-name {
		background-color: var(--main-text);
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
		color: var(--carpet);
		translate: 5em -5em;
		padding-left: 20px;
		padding-right: 20px;
		z-index: 1;
		position: absolute;
	}

	#my-name img {
		margin: 20px;
		position: absolute;
		left: 0;
		bottom: 0;
		display: block;
		border-radius: 100px;
	}

	#my-name h1 {
		margin: 20px 20px 20px 120px;
		font-weight: 100;
		letter-spacing: 0.2em;
		font-style: italic;
	}
	*/

	.p-pic {
		position: absolute;
		right: 2em;
		top: -50px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		background-color: var(--main-text);
		width: 150px;
		height: 150px;
	}

	.p-pic span {
		color: var(--mid);
		text-align: center;
		margin: 1em;
		line-height: 1em;
	}

	.shrink-for-ppic {
		max-width: 60%;
	}

	li :global(.prev-proj) {
		opacity: 0;
	}

	li:hover :global(.prev-proj) {
		opacity: 100;
	}

	.pad {
		padding: 1em 2em;
		position: relative;
	}

	.light {
		background-color: var(--background);
		color: var(--main-text);
		transition: background-color var(--speed-normal);
	}

	.dark {
		background-color: var(--main-text);
		color: var(--carpet);
		transition: background-color var(--speed-normal);
	}

	.btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 0.5em 1em;
		/* word-wrap: break-word; */
		/* word-break: break-all; */
		background-color: var(--main-text);
		color: var(--carpet);
		/* width: min-content; */
		margin: 1px;
		transition: background-color var(--speed-normal), color var(--speed-normal);
	}

	.proj-container {
		display: flex;
		flex-wrap: wrap;
	}

	.lang {
		position: relative;
		margin: 1px;
		background-color: var(--mid);
		color: var(--carpet);
		padding: 0.2em 0.5em;
		z-index: 0;
		flex: 1;
		align-items: center;
		text-align: center;
	}

	.lang .level {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--main-text);
		z-index: -1;
		transition: background-color var(--speed-normal);
	}

	.lang:hover .level {
		position: absolute;
		background-color: var(--accent);
	}

	.project {
		cursor: pointer;
		color: var(--carpet);
		background-color: var(--main-text);
		flex-grow: 1;
		margin: 1px;
		padding: 0.5em 1em;
		display: block;
		min-width: min-content;
		width: 20%;
		position: relative;
		overflow: hidden;
		transition: background-color var(--speed-normal), color var(--speed-normal);
	}

	.project:hover {
		color: var(--main-text);
		background-color: var(--accent);
	}

	.project.fade {
		background-color: var(--mid);
	}

	.project.fade:hover {
		color: var(--carpet);
		background-color: var(--main-text);
	}

	.project.misc::after {
		content: "";
		position: absolute;
		margin: -8px;
		width: 16px;
		height: 16px;
		transform: rotate(45deg);
		background-color: var(--carpet);
		top: 0;
		left: 0;
		transition: background-color var(--speed-normal);
	}

	/* .project.misc {
		clip-path: polygon(
			0 5px,
			0px 0,
			55px 0,
			60px 5px,
			100% 5px,
			100% 100%,
			0 100%
		);

		padding-top: calc(0.5em + 5px);
	} */

	.logo-text {
		margin: 1em;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		text-align: center;
	}

	.cta {
		color: var(--background);
		background-color: var(--main-text);
		border: none;
		transition: color var(--speed-normal);
		flex: 1;
	}
	.cta:hover {
		color: var(--accent);
	}

	.skillset {
		display: flex;
		flex-wrap: wrap;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		/* max-width: 50%; */
	}

	.contact-form input[type="email"] {
		font-size: 14px;
		font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
		border: none;
		margin: 1px;
		padding: 1em;
		background-color: var(--main-text);
		color: var(--carpet);
	}

	.contact-form textarea {
		font-size: 14px;
		font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
		border: none;
		margin: 1px;
		padding: 1em;
		background-color: var(--main-text);
		min-height: 10em;
		color: var(--carpet);
	}

	.contact-form input:focus,
	.contact-form textarea:focus {
		outline: none;
	}

	.contact-form button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		text-decoration: none;
		padding: 0.5em 1em;
		/* word-wrap: break-word; */
		/* word-break: break-all; */
		background-color: var(--accent);
		color: var(--main-text);
		/* width: min-content; */
		font-weight: bold;
		margin: 1em 0 0 0;
		width: max-content;
		transition: background-color var(--speed-normal), color var(--speed-normal);
	}

	@container (width < 700px) {
		main {
			margin: 0 1em 1em 1em;
			padding: 1em;
		}

		.stack-on-small {
			flex-direction: column;
		}
	}

	@container (width < 500px) {
		.p-pic {
			width: 100px;
			height: 100px;
			right: 1em;
		}

		.p-pic span {
			margin: 0.5em;
		}

		.shrink-for-ppic {
			max-width: unset;
		}
	}
</style>