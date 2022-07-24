RegisterCommand('openframe', function()
  SendNUIMessage({type = 'openframe'})
  SetNuiFocus(true, true)
end)

RegisterNUICallback('closeframe', function(data, cb)
  SetNuiFocus(false, false)
  cb(true)
end)