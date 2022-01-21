import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getUserHandler, patchUserHandler } from "../../apis/api/user";
import { RootState } from "../../modules";
import { setUserInfo } from "../../modules/user";
import { BlueBtn } from "../common/Buttons";
import { genreType } from "../common/GenreBox";
import CheckBoxForm from "../Setting/CheckBoxForm";
const EditGenre: React.FC = () => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const [genreArr, setGenreArr] = React.useState<number[]>(
		userObj.genres.map((it: genreType) => it.genreIdx)
	);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		try {
			patchUserHandler(userObj.userIdx, { genres: genreArr }).then((res) => {
				getUserHandler(userObj.userIdx).then((res) =>
					dispatch(setUserInfo(res.user))
				);
				navigate("/");
			});
		} catch (err: any) {
			alert(err.message);
		}
	};

	return (
		<From className="col-container" onSubmit={onSubmit}>
			<CheckBoxForm genreArr={genreArr} setGenreArr={setGenreArr} />
			<BlueBtn>변경</BlueBtn>
		</From>
	);
};
export default EditGenre;
const From = styled.form`
	gap: 30px;
	width: 100%;
	& > button {
		text-align: center;
		box-shadow: 5px 5px 20px 0 #45c7ff35;
	}
`;
