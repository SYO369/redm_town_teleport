Config={}
Config.des = {
    annesburg = vector3(2871.3, 1411.3, 72.6),
    armadillo = vector3(-3667.3, -2619.3, -13.1),
    black_water = vector3(-687.3, -1242.249, 43.1),
    rhodes = vector3(1227.77, -1304.7, 76.95),
    saint_denis = vector3(2722.3, -1320.3, 49.6),
    strawberry = vector3(-1710.2373, -431.3245, 150.6825),
    tumbleweed = vector3(-5517.3, -2941.3, -1.5),
    valentine = vector3(-174.3, 621.18, 114.08),
    van_horn = vector3(2986.3, 574.3, 45.3),
}

RegisterNUICallback("teleport", function(data, cb)
    cb({})
    local destination = data.town
    SetNuiFocus(false, false)
    for k, v in pairs(Config.des) do
        if destination == k then
            teleport(v)
        end
    end
end)

RegisterCommand("towntp", function(source, args, raw)
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "open",
    })
end, false)

function teleport(coords)
    DoScreenFadeOut(2000)
    Wait(2000)
    SetEntityCoords(PlayerPedId(), coords.x, coords.y, coords.z, false, false, false, false)
    -- SetGuarmaWorldhorizonActive(false)
	-- SetWorldWaterType(0)
	-- SetWorldMapType(`world`)
    DoScreenFadeIn(3000)
end