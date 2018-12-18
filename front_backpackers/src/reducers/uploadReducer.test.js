import uploadReducer from "./uploadReducer";
import {
  makeUploadSuccessAction,
  makeUploadFailAction
} from "../actions/actions";

describe("uploadReducer", () => {
  it("handles UPLOAD_SUCCESS action", () => {
    const previousState = "";
    const data = "fichier";
    const expected = "fichier";

    expect(uploadReducer(previousState, makeUploadSuccessAction(data))).toEqual(
      expected
    );
  });

  it("handles UPLOAD_FAIL action", () => {
    const previousState = "";
    const error = "error";
    const expected = "error";

    expect(uploadReducer(previousState, makeUploadFailAction(error))).toEqual(
      expected
    );
  });
});
