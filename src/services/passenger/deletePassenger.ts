import Api from "@services/api";

export async function deletePassenger(id: number): Promise<void> {
  const Apis = await Api.getInstance();
    await Apis.delete({
    url: `/passenger/${id}`,
});
}