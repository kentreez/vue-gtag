import nativeConfig from "@/api/native-config";
import query from "@/api/query";

jest.mock("@/api/query");
jest.mock("@/install");

describe("api/native-config", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be called with this parameters", () => {
    nativeConfig("foo");
    expect(query).toHaveBeenCalledWith("config", "foo");

    nativeConfig({ foo: "bar" });
    expect(query).toHaveBeenCalledWith("config", { foo: "bar" });
  });
});
