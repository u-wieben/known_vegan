export default function ContentWindow({ children, title }) {
	return (
		<div className="contentWindow p-2 rounded">
			<h2>{title}</h2>
			{children}
		</div>
	)
}