import Api from "@services/api";

export async function deleteDriver(id: number): Promise<void> {
  const Apis = await Api.getInstance();
    await Apis.delete({
    url: `/driver/${id}`,
  });
}