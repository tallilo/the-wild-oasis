import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
export default function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("settings succeddfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateSettings };
}
