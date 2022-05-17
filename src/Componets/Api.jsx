import { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

export const Api = () => {
	let name = "pic";
	const [pic, setPic] = useState(name);
	const {
		register,
		handleSubmit,
		reset
		//formState: { errors }
	} = useForm();

	const PostAvatar = (data) => {
		let dato = data.pic;
		let datos = {
			pic: `https://avatars.dicebear.com/api/micah/${dato}.svg`
		};
		reset();
		setPic(datos.pic);
	};

	return (
		<div className="container">
			<p style={{ margin: "20px auto", fontSize: "40px" }}>Who Are You? </p>
			<form onSubmit={handleSubmit(PostAvatar)}>
				<input
					style={{ margin: "auto", width: "300px", marginBottom: "10px" }}
					className="form-control"
					type="text"
					placeholder="avatar"
					name={pic}
					{...register(name)}
				/>
				<button
					type="submit"
					className="btn-sm btn-warning"
					style={{ margin: "10px auto" }}>
					Search
				</button>
			</form>
			<div
				style={{
					background: "purple",
					width: "400px",
					height: "300px",
					margin: "auto",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "10px"
				}}>
				<img src={pic} alt="" style={{ width: "300px" }} />
			</div>
		</div>
	);
};
