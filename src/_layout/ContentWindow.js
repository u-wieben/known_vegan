export default function ContentWindow({ children, title }) {
	return (
		<div className="contentWindow">
			<h2 className="rounded-top p-2">{title}</h2>
			<div className="rounded-bottom p-3">
				{children}
			</div>
		</div>
  )
}