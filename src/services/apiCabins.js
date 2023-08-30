import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Cabins could not be loaded");
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  console.log(data);
  if (error) {
    throw new Error("Cabins could not be Deleted");
  }

  return data;
}
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-imag/${imageName}`;

  ///https://weukrhlwvuemycklgekl.supabase.co/storage/v1/object/public/cabin-imag/cabin-001.jpg
  //1) create /edit cabin
  let query = supabase.from("cabins");
  //a) create the cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
    console.log("createing");
  }

  //b) updting a cabin
  if (id) {
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
    console.log("editing");
  }

  const { data, error } = await query.select().single();
  if (error) {
    throw new Error("Cabins could not be created");
  }
  /// Upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-imag")
    .upload(imageName, newCabin.image);
  //delete the cabin if there wad a error uploading the image
  console.log(storageError);
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", newCabin.id);
    console.log(storageError);
    throw new Error("Cabins image could not be uploaded");
  }
  console.log(4);
  return data;
}
