import math

# Positions
propellers = [(2.0, 2.0), (2.0, 8.0), (8.0, 8.0), (8.0, 2.0)]
diamond_vertices = [(3.0, 5.0), (5.0, 7.0), (7.0, 5.0), (5.0, 3.0)]
diamond_center = (5.0, 5.0)

# Connecting lines from diamond to propellers
connections = [
    ((3.0, 5.0), (2.0, 2.0)),
    ((5.0, 7.0), (2.0, 8.0)),
    ((7.0, 5.0), (8.0, 8.0)),
    ((5.0, 3.0), (8.0, 2.0)),
]

# Distance and angle functions
def distance(a, b):
    return math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2)

def angle_between(a, b):
    return math.degrees(math.atan2(b[1] - a[1], b[0] - a[0]))

# Print distances and angles from center to each diamond corner
for v in diamond_vertices:
    dist = distance(diamond_center, v)
    angle = angle_between(diamond_center, v)
    print(f"From center to {v}: Distance = {dist:.2f}, Angle = {angle:.2f} degrees")

# Print distances and angles for connections
print("\nConnecting lines:")
for start, end in connections:
    dist = distance(start, end)
    angle = angle_between(start, end)
    print(f"From {start} to {end}: Distance = {dist:.2f}, Angle = {angle:.2f} degrees")
